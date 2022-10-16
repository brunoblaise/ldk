import React, {useEffect} from 'react';

import {useStoreActions, useStoreState} from 'easy-peasy';
import {Navigate, Outlet} from 'react-router-dom';

const PrivateRoutes = () => {
  const {Auth} = useStoreState((state) => state);
  const {setProfile} = useStoreActions((state) => state.User);
  const {token, isAuth} = Auth;
  const getProfile = async () => {
    try {
      const res = await fetch(`${url}/get/profile`, {
        method: 'GET',
        headers: {jwt_token: token},
      });

      const parseData = await res.json();

      if (parseData) {
        setProfile(parseData);
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  return isAuth ? <Outlet /> : <Navigate to='/' />;
};

export default PrivateRoutes;
