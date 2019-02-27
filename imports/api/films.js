import { Mongo } from 'meteor/mongo';

class FilmsCollection extends Mongo.Collection {
  constructor () {
    super('films');
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


export default new FilmsCollection();