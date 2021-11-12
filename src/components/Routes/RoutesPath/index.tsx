import React from 'react';
import CardsPage from '../../../pages/CardsPage/index';
import HomePage from '../../../pages/HomePage';
// import TicToePage from '../../../pages/TicToePage';

export interface RouterInterface {
  path: string,
  Component: React.FC,
  exact: boolean
}

export const privateRoutes: Array<RouterInterface> = [
  {
    path: '/cards',
    Component: HomePage,
    exact: true,
  }
];

export const publicRoutes: Array<RouterInterface> = [
  {
    path: '/',
    Component: HomePage,
    exact: true
  },
  {
    path: '/cards',
    Component: CardsPage,
    exact: true,
  },
  // {
  //   path: '/tic',
  //   Component: TicToePage,
  //   exact: true,
  // }
];
