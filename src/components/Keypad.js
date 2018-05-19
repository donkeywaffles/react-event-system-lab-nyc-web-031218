// Code Keypad Component Here
import React from 'react'

class Keypad extends React.Component {
  yuh = () => {
    console.log('Entering password...');
  }
  render(){
    return (
    <input type="password" onKeyUp={this.yuh} />
    )
  }
}

export default Keypad;
