import { authActions } from './auth-slice';
import { UiActions } from '../ui/ui-slice';
//UTLITY
import { URL } from '../../utility/baseURL';



export const loginAction = (username, password) => {
  return async (dispatch) => {
    const loginUser = async () => {
      const obj = await fetch(URL + '/auth/login', {
        method: 'POST',
        body: JSON.stringify({
          username: username,
          password: password,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const res = await obj.json();
      const { token, expiresIn, username: userName } = res;

      const onDayAfter = Date.now() + expiresIn;
      const newToken = 'Bearer ' + token;

      localStorage.setItem('token', newToken);
      localStorage.setItem('expiresIn', onDayAfter);
      localStorage.setItem('username', userName);

      dispatch(authActions.login({
        token: newToken,
        username:username
      }));

      
    };

    try {
      await loginUser();
      dispatch(UiActions.setNotification({
        status:'success',
        content:'Accesso effettuato con successo.'
      }));
    } catch (err) {
      dispatch(UiActions.setNotification({
        status:'error',
        content:'Ops qualcosa è andato storto.'
      }));
    }
  };
};


export const registerAction = (username, password) => {
  return async (dispatch) => {
    const registerUser = async (username, password) => {
      const res = await fetch(URL + '/auth/register', {
        method: 'POST',
        body: JSON.stringify({
          username,
          password,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!res.ok) {
        throw new Error('Qualcosa è andato storto.');
      }

      const obj = await res.json();
      if (obj.message) {
        dispatch(
          UiActions.setNotification({
            status: 'error',
            content: obj.message,
          })
        );
      }
    };

    try {
      await registerUser(username, password);
    } catch (err) {
      console.log(err.message);
    }
  };
};