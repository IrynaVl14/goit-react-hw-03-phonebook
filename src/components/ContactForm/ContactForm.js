import React, { Component } from "react";
import styles from './ContactForm.module.css';

class ContactForm extends Component{
state = {
  name: '',
  number: ''
  }
  
  handleInputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({[name]:value})
  }

  handleFormSubmit = e => {
      e.preventDefault();
      this.props.onSubmitForm(this.state)
      this.reset();
    }
    
    reset = () => {
        this.setState({name: '', number: ''})
    }

  render() {
    return (
    <div>
        <form onSubmit={this.handleFormSubmit} className={styles.contactForm}>
            <label className={styles.contactFormItem}>Name
              <input
                type="text"
                value={this.state.name}
                onChange={this.handleInputChange}
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
              />
            </label>
            <label className={styles.contactFormItem}>Number
              <input
                type="tel"
                value={this.state.number}
                onChange={this.handleInputChange}
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
              />
            </label>
            <button type="submit" className={styles.contactFormBtn}>Add contact</button>
        </form>
    </div>
  );
  }  
}

export default ContactForm;