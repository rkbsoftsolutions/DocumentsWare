import { Meteor } from 'meteor/meteor';
import { Users } from '../users'

Meteor.publish("user.userslist", () => {


    var _users = Users.find({});

    if (_users)
        return _users

    this.ready();


})