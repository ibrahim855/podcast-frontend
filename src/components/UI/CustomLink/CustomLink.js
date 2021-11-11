import React from 'react';
import { Link } from 'react-router-dom';

//REDUX STUFF 
import { useDispatch } from 'react-redux';
import { UiActions } from '../../../context/ui/ui-slice';


function CustomLink(props) {
    const dispatch = useDispatch();
    const { to, content } = props;

    const onNavigation = (e) => {
        dispatch(UiActions.toggleDropDown());
    }


    return <Link onClick={onNavigation} to={to}>
                {content}
            </Link>
}

export default CustomLink;