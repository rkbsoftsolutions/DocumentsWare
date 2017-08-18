import './signup.html'

import { Meteor } from 'meteor/meteor'
import { Template } from 'meteor/templating'
import { Accounts } from 'meteor/accounts-base';
import { FlowRouter } from 'meteor/kadira:flow-router';

Template.signup.onCreated(() => {
})

Template.signup.events({


    'submit #frmsignup': (e, tmpl) => {
        debugger;
        e.preventDefault();
        let username = e.currentTarget.signupname.value;
        let email = e.currentTarget.signupemail.value;
        let password = e.currentTarget.signuppassword.value;
        if (username !== "" && email !== "" && password !== "") {
                let user = {
                    username: username,
                    email: email,
                    password: password
                };
               Accounts.createUser(user,(err,res)=>{
                  if(!err)
                    FlowRouter.go('/home');
                        else
                    console.log(err);
                })
                
            }
        


    }


})


