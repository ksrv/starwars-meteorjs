import { Mongo } from 'meteor/mongo';

class VehiclesCollection extends Mongo.Collection {
  constructor () {
    super('vehicles');
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


export default new VehiclesCollection();