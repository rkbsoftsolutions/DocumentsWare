import './home.html'
import { Meteor } from 'meteor/meteor'
import { Template } from 'meteor/templating'
import { FlowRouter } from 'meteor/kadira:flow-router';

Template.home.helpers({

    UserName:()=>{
       return Meteor.user().username;
    }
})

Template.home.events({

   'click #logout':(e,template)=>{
      Meteor.logout(function(error,res){
        FlowRouter.go("/");
      })
   }
})