import React from 'react';
import { HashRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import { App } from './App';
import { UsersPage, AlbumsPage, PostsPage } from './pages';

  export const Root = () => (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<UsersPage />} />
          <Route path="/users" element={<Outlet />}>
            <Route index element={<UsersPage />} />
            <Route path=":id/albums" element={<AlbumsPage />} />
            <Route path=":id/posts" element={<PostsPage />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
