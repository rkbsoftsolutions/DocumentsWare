import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout'
import '../../ui/layout/protectedlayout'
import '../../ui/layout/publiclayout'


var ProtectedRouts=FlowRouter.group({

    name:"protectedlayout",
    triggersEnter: [function(context, redirect) {
        console.log("in protected", Meteor.userId())
          if (!Meteor.userId()) {
           redirect('/')
          }
    }]

})

FlowRouter.route('/', {
  name: 'home',
   action() {BlazeLayout.render('publiclayout', { main: 'login' });},
});


FlowRouter.route('/signup', {
    name: 'home',
    
    action() {BlazeLayout.render('publiclayout', { main: 'signup' });},
  });

  ProtectedRouts.route("/home",{
    name:"home",
    action(){
        BlazeLayout.render('protectedlayout', { header:"header", main: 'home' });

    }})






FlowRouter.notFound = {
  action() {
    BlazeLayout.render('layout', { main: 'notFound' });
  },
};
