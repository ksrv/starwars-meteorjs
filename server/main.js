import { Meteor } from 'meteor/meteor';
import install from './install';
import publications from './publications';

Meteor.startup(() => {
  install();

  publications.forEach(pub => pub());
});
