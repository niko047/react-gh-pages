import React from 'react';
import './Backdrop.css';

const backdrop = (props) => {
    return (
        props.show ? <div 
        className={'Backdrop Obscuring'} onClick={props.changeState}></div> : <div className={'Backdrop DeObscuring ObBackground'} ></div>
        
    )
};

export default backdrop;