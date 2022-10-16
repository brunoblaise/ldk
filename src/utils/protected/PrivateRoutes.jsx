import {useStoreState} from 'easy-peasy';
import React from 'react';

import {Navigate, Outlet} from 'react-router-dom';

const PrivateRoutes = () => {
  const {Auth} = useStoreState((state) => state);
  const {profile} = useStoreState((state) => state.User);

  const {isAuth} = Auth;

  return isAuth && profile.length === 1 ? <Outlet /> : <Navigate to='/' />;
};

export default PrivateRoutes;
