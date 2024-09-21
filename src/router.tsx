import React from 'react';

import { createBrowserRouter } from 'react-router-dom';

import { MainPage } from './pages';
import CartPage from './pages/CartPage';
import FavoritesPage from './pages/FavoritesPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },

  {
    path: '/main',
    element: <MainPage />,
  },

  {
    path: '/cart',
    element: <CartPage />,
  },
  {
    path: '/favorites',
    element: <FavoritesPage />,
  },
]);
