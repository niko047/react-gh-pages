import React from 'react';
import './SideMenu.css';
import Backdrop from './../Backdrop/Backdrop';
import SideMenuItem from './SideMenuItem/SideMenuItem';

const sideMenu = (props) => {

    let classesArray = ['Drawer', 'Closed'];

    if (props.isOpen) {
        classesArray = ['Drawer', 'Open']
    }

    return(
        <div className={classesArray.join(' ')}>

            <ul>
                <li>
                    <SideMenuItem closeMenu={props.changeState} isFirst={true} passedHref='#homepage'>Home</SideMenuItem>
                </li>
                <li>
                    <SideMenuItem closeMenu={props.changeState} passedHref='#wines'>Wines</SideMenuItem>
                </li>
                <li>
                    <SideMenuItem closeMenu={props.changeState} passedHref='#mission'>Mission</SideMenuItem>
                </li>
                <li>
                    <SideMenuItem closeMenu={props.changeState} passedHref='#contacts'>Contacts</SideMenuItem>
                </li>
            </ul>
        </div>

    )
};

export default sideMenu;