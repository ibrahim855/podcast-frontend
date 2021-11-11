import { authActions } from './auth-slice';
import { UiActions } from '../ui/ui-slice';
//UTLITY
import { URL } from '../../utility/baseURL';

export const loginAction = (username, password) => {
    return async dispatch => {
        const loginUser = async () => {
            const obj = await fetch(URL + "/auth/login", {
                method:'POST',
                body: JSON.stringify({
                    username:username,
                    password:password
                }),
                headers:{
                    'Content-Type':'application/json'
                }   
            });
            const res = await obj.json();
            const { token, expiresIn } = res;
            const onDayAfter = Date.now() + expiresIn;

            localStorage.setItem("token", token);
            localStorage.setItem("expiresIn", onDayAfter)

            dispatch(authActions.login(token));
        }


        try {
            await loginUser();
        } catch(err) {
            console.log(err);
        }

    };
}

export const registerAction = (username, password) => {
    return async dispatch => {
        
        const registerUser = async (username, password) => {
           const res = await fetch(URL + "/auth/register", {
                method:'POST',
                body:JSON.stringify({
                    username,
                    password
                }),
                headers: {
                    'Content-Type':'application/json'
                }
            });
            

            if(!res.ok) {
                throw new Error("Qualcosa è andato storto.");
            };

            const obj = await res.json();
            if(obj.message) {
                dispatch(UiActions.setNotification({
                    status:'error',
                    content: obj.message
                }));
            };
        };

        try {
            await registerUser(username, password);
        } catch(err) {
            console.log(err.message);
        };

    }
};