import React from 'react';
import NavBar from '../NavBar/NavBar';
import './Homepage.css';

const homepage = (props) => (

    <div className='Homepage' id='homepage'>
        <h1 className='FirstLine'>We believe</h1>
        <h1 className='SecondLine'>in</h1>
        <h1 className='ThirdLine'>Experiences</h1>
        <div className='HomepageColored'>
            <NavBar positions={props.positions}/>
        </div>
        
    </div>
);

export default homepage;