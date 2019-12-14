import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Homepage from './components/Homepage/Homepage';
import Wines from './components/Wines/Wines';
import BottleImage from './components/BottleImage/BottleImage';
import Mission from './components/Mission/Mission';
import Contacts from './components/Contacts/Contacts';
import Arrow from './components/Arrow/Arrow';
import BottomInfo from './components/BottomInfo/BottomInfo';
import SideMenu from './components/SideMenu/SideMenu';
import HamburgerButton from './components/HamburgerButton/HamburgerButton';
import Backdrop from './components/Backdrop/Backdrop';


class App extends Component {

  state = {
    isMenuOpen: false
  }

  componentDidMount() {
  //   window.addEventListener("hashchange", () => {
  //     window.scrollTo({window.scrollX, window.scrollY - 75});
  // });

  let anchorlinks = document.querySelectorAll('a[href^="#"]')
 
    for (let item of anchorlinks) { // relitere 
      item.addEventListener('click', (e) => {
        let hashval = item.getAttribute('href')
        let target = document.querySelector(hashval)
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
        window.history.pushState(null, null, hashval)
        e.preventDefault()
      })
    }

  }

  sideMenuStateChanged = () => {
    this.setState({isMenuOpen: !this.state.isMenuOpen})
  }

  render() {
    return (
      <div className="App">
        <SideMenu changeState={() => this.sideMenuStateChanged()} isOpen={this.state.isMenuOpen} positions={this.state.positions}/>
        <Backdrop changeState={() => this.sideMenuStateChanged()} show={this.state.isMenuOpen}/>
        <HamburgerButton changeState={() => this.sideMenuStateChanged()} isOpen={this.state.isMenuOpen}/>
        <Homepage positions={this.state.positions}/>
        <Arrow />
        <Wines />
        <BottleImage />
        <Mission />
        <Arrow />
        <Contacts />
        
        {/* <BottomInfo /> */}
      </div>
    );
  }

}

export default App;
