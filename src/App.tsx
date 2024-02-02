import React from 'react';
import OutletContainer from './components/OutletContainer';
import { Outlet } from 'react-router-dom';

export const App = () => (
  <OutletContainer>
    <Outlet />
  </OutletContainer>
);

