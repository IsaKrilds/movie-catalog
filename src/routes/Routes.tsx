import React from 'react';
import { Routes as Switch, Route, Navigate } from 'react-router-dom';
import Home from '../pages/home';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route caseSensitive path="/home" element={<Home />} />

      <Route path="*" element={<Navigate to="/home" replace />} />
    </Switch>
  );
};

export default Routes;
