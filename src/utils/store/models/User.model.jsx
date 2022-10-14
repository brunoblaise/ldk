import {action, thunk} from 'easy-peasy';
import {url} from '../../../url';

const user = {
  profile: [],
  setProfile: action((state, payload) => {
    state.profile = payload;
  }),
  fetchData: thunk(async (actions) => {
    const {Auth} = useStoreState((state) => state);
    const {token} = Auth;

    try {
      const response = await fetch(`${url}/get/profile`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          headers: {jwt_token: token},
        },
      });

      const parseRes = await response.json();
      actions.setProfile(parseRes);
    } catch (error) {
      console.log(error.message);
    }
  }),
};

export default user;
