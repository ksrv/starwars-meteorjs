import { Mongo } from 'meteor/mongo';

class PlanetsCollection extends Mongo.Collection {
  constructor () {
    super('planets');
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


export default new PlanetsCollection();