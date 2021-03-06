import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../context/UserContext';


const BrowserLinks = () => {
    
    const { user } = useContext(UserContext)

    return (
        <div className="browser-links">
            {
                user ? <Fragment>
                    <Link to="/about">About</Link>
                </Fragment> : <Fragment>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </Fragment>
            }
            
        </div>
    );
}

export default BrowserLinks;