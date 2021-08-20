/** @format */

import React, {useState, useEffect, createContext} from 'react';
import {url} from '../../url';
export const ProfileContext = createContext();
export const ProfileProvide = (props) => {
  const [profile, setProfile] = useState([]);
  const [loading, setLoading] = useState(true);
  const getProfile = async () => {
    try {
      const res = await fetch(`${url}/get/profile`, {
        method: 'GET',
        headers: {jwt_token: localStorage.token},
      });

      const parseData = await res.json();

      setProfile(parseData);
      setLoading(false);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <ProfileContext.Provider value={[profile, setProfile]}>
      {loading ? <p>loading..</p> : props.children}{' '}
    </ProfileContext.Provider>
  );
};
