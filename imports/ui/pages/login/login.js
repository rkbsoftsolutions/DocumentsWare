import './login.html'
import { Meteor } from 'meteor/meteor'
import { Template } from 'meteor/templating'
import { FlowRouter } from 'meteor/kadira:flow-router';


Template.login.events({

    'submit #frmlogin': (e, tmpl) => {
        debugger;
        e.preventDefault();

        let email = e.currentTarget.loginemail.value;
        let password = e.currentTarget.loginpassword.value;
        if (email !== "" && password !== "") {
            Meteor.loginWithPassword(email, password, (error,res) => {
                if (!error)
                    FlowRouter.go('/home');
                else
                    console.log(error);
            })
        }
    }
})

