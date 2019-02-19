import React, { Component } from 'react';
import Contact from './components/Contact';
import Button from './components/Button';
import contacts from './data/contacts.json';
import './App.css';

let contactList = [];
contacts.slice(0,5).map((contact) => {
  contactList.push(contact);
})

class App extends Component {

  state = {
    contacts: contactList,
  }
  
  addContact = () => {
    let contactList = [...this.state.contacts];
    let random = Math.floor(Math.random() * contacts.length) + 5;
    contactList.push(contacts[random]);
    this.setState({
      contacts: contactList,
    })
  }

  sortByName = () => {
    let contacts =[...this.state.contacts];
    contacts.sort(function(a, b){
      if(a.name < b.name) { return -1; }
      if(a.name > b.name) { return 1; }
      return 0;
    })
    this.setState({
      contacts,
    })
  }

  sortByPopularity = () => {
    let contacts = [...this.state.contacts];
    contacts.sort(function(a, b){
      if(a.popularity > b.popularity) { return -1; }
      if(a.popularity < b.popularity) { return 1; }
      return 0;
    })
    this.setState({
      contacts,
    })
  }

  deleteContact = (index) => {
    let contacts = [...this.state.contacts];
    contacts.splice(index,1);
    this.setState({
      contacts,
    })
  }

  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <div style={{display: 'flex'}}>
          <Button event={this.addContact} text="Add Random Contact"/>
          <Button event={this.sortByName}  text="Sort By Name"/>
          <Button event={this.sortByPopularity}  text="Sort By Popularity"/>
        </div>
        <table>
          <tbody>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </tbody>
          {this.state.contacts.map((contact, index) => {
            return <tbody key={index}><Contact deleteContact={this.deleteContact} index={index} name={contact.name} src={contact.pictureUrl} popularity={contact.popularity}/></tbody>
          })}
        </table>
      </div>
    );
  }
}

export default App;
