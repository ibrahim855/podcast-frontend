
import React, { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
//REDUX STUFF
import { useSelector } from 'react-redux';


//components
import Spinner from '../components/UI/Spinner/Spinner';


function Guard(props) {
    const isLoggedIn = useSelector(state => state.authentication.isLoggedIn);
    const { noAuthenticationRequired, authenticationRequired } = props;
    const location = useLocation();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            clearTimeout(timeout);
            setLoading(false);
        }, 2000);
    }, []);

    if(loading) {
        return <Spinner />
    };

    if(noAuthenticationRequired && isLoggedIn) {
        return <Navigate to={`${location.pathname === "/auth" ? "/" : location.pathname}`} />
    }
    if(authenticationRequired && !isLoggedIn) {
        return <Navigate to="/auth" />
    };
    
    return (
        <React.Fragment>
            {props.children}
        </React.Fragment>
    )

};

export default Guard;