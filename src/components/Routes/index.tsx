import React from 'react'
import { Route, Switch } from 'react-router-dom';
import { publicRoutes } from './RoutesPath';
import { AppRoutesStyled } from './styled'
import { RouterInterface } from './RoutesPath/index';

const AppRoutes = () => {
  const routes: Array<RouterInterface> = publicRoutes

  return (
    <AppRoutesStyled>
      <Switch>
        {
          routes.map(({ path, Component, exact }: RouterInterface) => {
            return <Route
              key={`${path}_routePath`}
              component={Component}
              path={path}
              exact={exact}
            />
          })
        }
        {/* <Redirect to={{
          pathname: '/',
          state: { from: window.location.pathname }
        }} /> */}
      </Switch>
    </AppRoutesStyled>
  )
}

export default AppRoutes
