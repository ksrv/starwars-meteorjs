import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import Starships from '/imports/api/starships';
import './index.html';


Template.home.onCreated(function homeCreated () {
  this.search = new ReactiveVar();
  this.limit = new ReactiveVar(10);

  this.more  = () => {
    this.limit.set(this.limit.get() + 10);
  }

  this.list = () => {
    const search = this.search.get();
    const limit = this.limit.get();
    return Starships.list({ search, limit });
  }

  this.autorun(() => {
    const search = this.search.get();
    const limit = this.limit.get();
    this.subscribe('starships:list', { search, limit });
  })
});


Template.home.events({
  'keydown .control' (event, instance) {
    instance.search.set(event.target.value);
  },
  'click .more' (event, instance) {
    instance.more();
  }

});


Template.home.helpers({
  starships () {
    return Template.instance().list();
  }
});