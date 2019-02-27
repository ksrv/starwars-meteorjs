import Collections from '/imports/api';


const json = {
  Films:      import('./fixtures/films.json'),
  People:     import('./fixtures/people.json'),
  Planets:    import('./fixtures/planets.json'),
  Species:    import('./fixtures/species.json'),
  Starships:  import('./fixtures/starships.json'),
  Vehicles:   import('./fixtures/vehicles.json'),
};


async function install (name) {
  try {
    const collection = Collections[name];
    collection.remove({});
    if (collection.count() == 0) {
      const fixtures = await json[name];
      fixtures.default.forEach(doc => collection.insert(doc));
    }
  } catch (error) {
    console.error(error);
  }
}


export default function () {
  Object.keys(Collections).forEach(install);
}