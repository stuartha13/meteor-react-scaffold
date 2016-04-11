import React from 'react';
import { mount } from 'react-mounter';
import { FlowRouter } from 'meteor/kadira:flow-router';

import { Layout } from '../../ui/layouts/layout.jsx';
import { Home } from '../../ui/pages/home.jsx';
import { Registration } from '../../ui/pages/user/registration.jsx';

// Static Routes
const staticRoutes = FlowRouter.group({
  prefix: '/',
  name: 'static'
});

staticRoutes.route('/', {
  name: 'Home',
  action() {
    mount(Layout, {
      main: (
        <Home />
      )
    });
  }
});

// User Routes
const userRoutes = FlowRouter.group({
  prefix: '/user',
  name: 'user'
});

userRoutes.route('/register', {
  name: 'Register',
  action() {
    mount(Layout, {
      main: (
        <Registration />
      )
    });
  }
});

