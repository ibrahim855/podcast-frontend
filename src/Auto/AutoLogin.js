

import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { authActions } from '../context/auth/auth-slice';


function AutoLogin(props) {

    const dispatch = useDispatch();
    
    useEffect(() => {
        if(localStorage.getItem('token')) {
            const username = localStorage.getItem('username');
            const token = localStorage.getItem('token');

            dispatch(authActions.login({
                token,
                username,
            }));
        }
    }, [dispatch]);

    return (
        <React.Fragment>
            { props.children }
        </React.Fragment>
    )
}

export default AutoLogin;