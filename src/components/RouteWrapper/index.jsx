import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const RouteWrapper = ({
  component: Component,
  layout: Layout,
  ...rest
}) => {

  const publicRoutes = [
    '/',
    '/login',
    '/signup',
  ];


  const isPublic = publicRoutes.includes(rest.path);
  const isLoggedIn = window.localStorage.getItem('jwt') != null;

  if (!isPublic && !isLoggedIn) {
    return <Redirect to='/login'/>;
  }

  if (isPublic && !isLoggedIn && window.location.pathname === '/') {
    return <Redirect to='/login'/>;
  }

  if (isPublic && isLoggedIn) {
    return <Redirect to='/'/>;
  }

  return (
    <Route {...rest} render={(props) => (
      <Layout {...props}>
        <Component {...props} />
      </Layout>
      )
    }/>
  );
}

export default RouteWrapper;
