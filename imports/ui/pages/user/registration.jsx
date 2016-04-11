import React from 'react';
import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router';

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

        <form onSubmit={ this.registerUser }>
          <div className="row">
            <div className="col">
              <input id="email" type="email" placeholder="Email address" />
            </div>

            <div className="col">
              <input id="password" type="password" placeholder="Password" />
            </div>

            <div className="col">
              <button type="submit">create account</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
