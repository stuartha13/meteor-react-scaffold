import React from 'react';
import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { AuthForm } from '/imports/ui/components/auth-form.jsx';

export class Registration extends React.Component {
  registerUser(event) {
    event.preventDefault();
    const form = event.target;
    const userObject = {
      email: form.querySelector('#email').value.trim(),
      password: form.querySelector('#password').value
    };

    Meteor.call('user.register', userObject, regErr => {
      if (regErr) {
        console.log(regErr);
      } else {
        Meteor.loginWithPassword(userObject.email, userObject.password, loginErr => {
          if (!loginErr) {
            FlowRouter.go('Home');
          } else {
            console.log(loginErr);
          }
        });
      }
    });
  }

  render() {
    return (
      <div className="container">
        Register
        <AuthForm onSubmit={ this.registerUser } submitText="create account" />
      </div>
    );
  }
}
