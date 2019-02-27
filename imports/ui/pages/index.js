
import { Router }           from 'meteor/iron:router';
import home from './home';


Router.route('/', {
    name:           'home',
    layoutTemplate: 'baseLayout',
    controller:     home
});
