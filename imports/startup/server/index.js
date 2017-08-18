import { Accounts } from 'meteor/accounts-base';
import {Meteor} from 'meteor/meteor'
Meteor.startup(()=>{

    Accounts.config({
        sendVerificationEmail:false
    })
});