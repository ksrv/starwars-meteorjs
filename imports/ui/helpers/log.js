export default function log (object) {
  if(Meteor.isDevelopment){
    console.log(object);
  }
}