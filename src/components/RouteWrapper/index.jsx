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
  const profileCompleted = window.localStorage.getItem('skillsSet') === 'true';

  if (!isPublic && !isLoggedIn) {
    return <Redirect to='/login'/>;
  }

  if (isPublic && !isLoggedIn && window.location.pathname === '/') {
    return <Redirect to='/login'/>;
  }

  if (!isPublic && isLoggedIn && !profileCompleted && window.location.pathname !== '/complete-profile') {
    return <Redirect to='/complete-profile'/>;
  }

  if (!isPublic && isLoggedIn && profileCompleted && window.location.pathname !== '/home') {
    return <Redirect to='/home'/>;
  }

  if (isPublic && isLoggedIn && profileCompleted && window.location.pathname !== '/home') {
    return <Redirect to='/home'/>;
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
