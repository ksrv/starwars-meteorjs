import { Mongo } from 'meteor/mongo';

class SpeciesCollection extends Mongo.Collection {
  constructor () {
    super('species');
    this.allow({
      insert: () => false,
      update: () => false,
      remove: () => false,
    });
  }

  count (query = {}) {
    return this.find(query).count();
  }
}


export default new SpeciesCollection();