import React, { Fragment, useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserContext from '../context/UserContext';
import About from '../pages/About';
import Login from '../pages/Login';
import Register from '../pages/Register';
import BrowserLinks from './BrowserLinks';

import Card from './Card';

const MainContent = () => {

    const { user } = useContext(UserContext)

    return (
        <main>
            <Router>
                
                <BrowserLinks />

                <Routes>
                    {
                        user ? <Fragment>
                            <Route exact path="/about" element={<About />} />
                        </Fragment> : <Fragment>
                            <Route exact path="/login" element={<Login />} />

                            <Route exact path="/register" element={<Register />} />
                        </Fragment>
                    }
                    
                </Routes>
                
                <Card />
            </Router>
        </main>
    );
}

export default MainContent;