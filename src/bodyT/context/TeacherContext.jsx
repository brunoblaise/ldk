import React, {useState, useEffect, createContext} from 'react';
import {url} from '../../url';

export const TeacherContext = createContext();
export const TeacherProvide = (props) => {
  const [profile, setProfile] = useState([]);

  const getProfile = async () => {
    try {
      const res = await fetch(`${url}/get/teacher`, {
        method: 'GET',
        headers: {jwt_token: localStorage.token},
      });

      const parseData = await res.json();

      setProfile(parseData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <TeacherContext.Provider value={[profile, setProfile]}>
      {props.children}{' '}
    </TeacherContext.Provider>
  );
};
