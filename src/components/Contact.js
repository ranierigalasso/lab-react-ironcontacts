import React, { Component } from 'react';
import Button from './Button';

class Contact extends Component {

  
  render () {
    let {index} = this.props;
    return (
      <tr>
        <td><img style={{width: '5rem'}}src={this.props.src}></img></td>
        <td><p>{this.props.name}</p></td>
        <td><p>{this.props.popularity}</p></td>
        <td><Button event={() => {this.props.deleteContact(index)}} text="Delete" /></td>
      </tr>
    );
  }
}

export default Contact;