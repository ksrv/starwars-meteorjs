import { Mongo } from 'meteor/mongo';

class StarshipsCollection extends Mongo.Collection {
  constructor () {
    super('starships');
    this.allow({
      insert: () => false,
      update: () => false,
      remove: () => false,
    });
    this.queryLength = null;
  }

  count (query = {}) {
    return this.find(query).count();
  }

  list ({ search, limit = 10 } = {}) {
    const query = {};
    const sort = { name: 1 };
    const options = { sort, limit };

    if (search) {
      query.name = { $regex: search, $options: 'i' };
    }

    this.queryLength = this.find(query).count();

    return this.find(query, options);
  }
}


export default new StarshipsCollection();