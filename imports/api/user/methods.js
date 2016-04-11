/* global Meteor, Accounts, Roles, check, console */
import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { check } from 'meteor/check';
import chalk from 'chalk';
chalk.enabled = true;

Meteor.methods({
  'user.register'(userObject) {
    check(userObject, {
      email: String,
      password: String
    });

    const { email, password } = userObject;

    try {
      const newUserId = Accounts.createUser({
        email,
        password
      });

      Roles.addUsersToRoles(newUserId, 'user');
      console.log(chalk.green('[audit] New user registered:'), `ID - ${newUserId} | Email - ${email}`);

      return newUserId;
    } catch (e) {
      console.log(chalk.red('[error] Error registering user:'), `${e.reason} | Email - ${email}`);
      throw new Meteor.Error(500, 'Error registering the user.');
    }
  }
});
