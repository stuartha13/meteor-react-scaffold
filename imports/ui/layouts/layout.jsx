import React from 'react';
import { Navigation } from '../components/navigation.jsx';

export const Layout = props => (
  <div>
    <Navigation />
    <main>
      { props.main }
    </main>
  </div>
);
