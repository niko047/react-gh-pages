import React from 'react';
import './HamburgerButton.css';

const hamburgerButton = (props) => {

    console.log(props.isOpen)
    return(
    <div className='Container' onClick={props.changeState} >
        <div className={props.isOpen ? 'change1 ChangeBright' : 'ChangeDark'}></div>
        <div className={props.isOpen ? 'change2 ChangeBright' : 'ChangeDark'}></div>
        <div className={props.isOpen ? 'change3 ChangeBright' : 'ChangeDark'}></div>
    </div>

    )
};

export default hamburgerButton;