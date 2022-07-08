import React, { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

import northMan from "../images/northman.jpg";

const Card = () => {

    const { theme } = useContext(ThemeContext)


    return (
        
        <div className="card item-center" style={{ boxShadow: theme.boxShadow }}>

            <div>
                
                <img src={northMan} alt="The Northman" />

            </div>
            <div>

                <h2>
                    The Northman
                </h2>
                <p>
                    Prince Amleth is on the verge of becoming a man when his father is brutally murdered by his uncle, who kidnaps the boy's mother. Two decades later, Amleth is now a Viking who's on a mission to save his mother, kill his uncle and avenge his father.
                </p>
                <div className="batch">
                    7.3
                </div>

            </div>
        

        </div>
    );
}

export default Card;