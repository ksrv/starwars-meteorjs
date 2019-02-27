import { Meteor } from 'meteor/meteor';
import configureRouter from './router';
import registerHelpers from '../helpers';
import '../layouts';
import '../pages';
import '../templates';


Meteor.startup(() => {
  registerHelpers();
  configureRouter();
});