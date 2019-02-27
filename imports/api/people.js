import { Mongo } from 'meteor/mongo';

class PeopleCollection extends Mongo.Collection {
  constructor () {
    super('people');
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


export default new PeopleCollection();