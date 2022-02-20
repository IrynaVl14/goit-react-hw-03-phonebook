import PropTypes from 'prop-types';
import styles from './ContactList.module.css';
import ContactItem from '../ContactItem';

const ContactList = ({ contacts, onDeleteContact }) =>
{return <ul className={styles.contactList}>
    {contacts.map(({ id, name, number }) =>
        <li className={styles.contactListItem} key={id}>
            <ContactItem            
                name={name}
                number={number}
                onDelete={()=>onDeleteContact(id)}        
            />
        </li>
    )}
</ul>};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact:PropTypes.func.isRequired,
};

export default ContactList;