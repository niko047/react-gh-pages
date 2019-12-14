import React, { Component } from 'react';
import './Contacts.css';
import { conditionalExpression } from '@babel/types';

class Contacts extends Component {
    state={
        numberOfWords: 0
    }

    textHasChanged = (event) => {
        console.log(event.target.value)
        this.setState({numberOfWords:event.target.value.length})
    }
    

    render () {
        console.log('rerendered')
        return(
            <div className='Contacts' id='contacts'>
                <div className='Inputs'>
                    <input type='text' placeholder='Name'/>
                    <input type='text' placeholder='Company'/>
                    <input type='email' placeholder='E-mail'/>
                </div>

                <div className='Form'>
                    <textarea onChange={(event) => this.textHasChanged(event)} maxLength={500} placeholder='Message...'/>
                    <p>{this.state.numberOfWords}/500</p>
                    <button>Submit</button>
                </div>
            </div>

        )
    }
};

export default Contacts;
