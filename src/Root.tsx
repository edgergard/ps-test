import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { App } from './App';
import { UsersPage, AlbumsPage, PostsPage } from './pages';

export const Root = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<UsersPage />} />
        <Route path="/users/:id/albums" element={<AlbumsPage />} />
        <Route path="/users/:id/posts" element={<PostsPage />} />
      </Route>
    </Routes>
  </Router>
);
