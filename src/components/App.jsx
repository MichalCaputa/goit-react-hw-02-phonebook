import React, { Component } from 'react';
import { ContactForm } from './comps/PhoneBookForm';
import { ContactsList } from './comps/ContactList';
import { Filter } from './comps/Filter';
export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  handleChange = evt => {
    const { value, id, name } = evt.target;
    if (name === 'contactName') {
      const Newcontact = { id: id, name: value };
      this.setState({ name: Newcontact });
    }

    if (name === 'filter') {
      this.setState({ filter: value });
    }
  };
  handleUser = (id, contactName, number) => {
    if (this.state.contacts.find(element => element.name === contactName)) {
      return alert(contactName + ' is already in contacts');
    }
    this.setState({
      contacts: [...this.state.contacts, { name: contactName, number: number }],
    });
  };
  handleRemoveData = evt => {
    let array = [...this.state.contacts];
    console.log('array,', array);
    const nameToRemove = evt.target.id;

    const removeContact = name => {
      const index = array.findIndex(function (contact) {
        return contact.name === name;
      });
      if (index > -1) {
        array.splice(index, 1);
        this.setState({ contacts: array });
      }
    };
    removeContact(nameToRemove);
  };

  render() {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.handleUser} onChange={this.handleChange} />
        {this.state.contacts.length > 0 && (
          <div>
            <h2>Contacts</h2>
            <Filter change={this.handleChange} />
            <ContactsList data={this.state} remove={this.handleRemoveData} />
          </div>
        )}
      </div>
    );
  }
}
