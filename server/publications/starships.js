import { Meteor } from 'meteor/meteor';
import Starships from '/imports/api/starships';


export default function starsipsPublications () {
  Meteor.publish('starships:list', ({ search = '', limit = 10 } = {}) => {
    return Starships.list ({ search, limit });
  });

  Meteor.publish('starship', function ({ _id }) {
    return Starships.one({ _id });
  });
}
