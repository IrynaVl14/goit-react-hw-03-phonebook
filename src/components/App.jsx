import { Component } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { nanoid } from 'nanoid';


export class App extends Component {
  state = {
    contacts: [    
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },  
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },    
  ],
  filter: '',
  }
  
  deleteContact = contactId => {
    this.setState(prevState => ({ contacts: prevState.contacts.filter(contact => contact.id !== contactId) }));
  }

  addContact = ({name,number})=> {
    const contactItem = {
    id:nanoid(5),
    name,
    number
    }
    
    const filteredNameInList = this.state.contacts.find(
      contact=>contact.name.toLowerCase()===name.toLowerCase()
    )

    if (filteredNameInList) {
       return alert(`${name} is already in contacts.`);
    }
    
    this.setState(prevState => ({
    contacts: [contactItem,...prevState.contacts]
    }))
  }

  handlerFormSubmit = data => {
    this.addContact(data)
  }

  changeFilter = e => {
    this.setState({filter:e.currentTarget.value})
  }

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(normalizedFilter)
    });
  
  }

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts',JSON.stringify(this.state.contacts))
    }
  }

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();
    
    return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmitForm={this.handlerFormSubmit }/>

      <h2>Contacts</h2>
      <Filter filter={filter} onChangeFilter={this.changeFilter}/>
          <ContactList contacts={visibleContacts} onDeleteContact={this.deleteContact}/>
    </div>
  );
  }  
};