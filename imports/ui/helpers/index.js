import { Template } from 'meteor/templating';
import log from './log';


export default function registerHelpers () {
  Template.registerHelper('log', log);
}