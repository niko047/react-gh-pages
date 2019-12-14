import React from 'react';
import './SideMenuItem.css';


const sideMenuItem = (props) => (
    <div className='SideMenuItem' style={props.isFirst ? null : {borderTop: '1px solid rgb(0,255,255)'}}>
        <a href={props.passedHref} onClick={props.closeMenu}>{props.children}</a>
    </div>
);

export default sideMenuItem;