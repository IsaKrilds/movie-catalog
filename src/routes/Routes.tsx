import React from 'react';
import { Routes as Switch, Route, Navigate } from 'react-router-dom';
import BrowseByGenre from '../pages/browseByGenre';
import Home from '../pages/home';
import SearchMovies from '../pages/searchMovies';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route caseSensitive path="/home" element={<Home />} />
      <Route caseSensitive path="/browse-by-genre" element={<BrowseByGenre />} />
      <Route caseSensitive path="/search" element={<SearchMovies />} />

      <Route path="*" element={<Navigate to="/home" replace />} />
    </Switch>
  );
};

export default Routes;
