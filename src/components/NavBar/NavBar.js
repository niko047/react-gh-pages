import React from 'react';
import './NavBar.css';

const navbar = (props) => (
    <div className='NavBar'>
        <ul>
            <li>
                <a href='#homepage'>Home</a>
            </li>
            <li>
                <a href='#wines'>Wines</a>
            </li>
            <li>
                <a href='#mission'>Mission</a>
            </li>
            <li>
                <a href='#contacts'>Contacts</a>
            </li>
        </ul>
    </div>
);

export default navbar;
