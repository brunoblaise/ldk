import React, {useState, useEffect, createContext} from 'react';
import {url} from '../../url';

export const TeacherContext = createContext();
export const TeacherProvide = (props) => {
  const [profile, setProfile] = useState([]);
  const [loading, setLoading] = useState(true);
  const getProfile = async () => {
    try {
      const res = await fetch(`${url}/get/teacher`, {
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
    <TeacherContext.Provider value={[profile, setProfile]}>
      {loading ? <p>loading..</p> : props.children}{' '}
    </TeacherContext.Provider>
  );
};
