import PropTypes from 'prop-types';
import styles from './ContactList.module.css';

const ContactList = ({contacts, onDeleteContact}) =>
{return <ul className={styles.contactList}>
    {contacts.map(({id,name,number}) => <li className={styles.contactListItem} key={id}>      
        <p className={styles.contactListData}>{name} : {number}</p>
            <button
                className={styles.contactListBtn}
                type="button"
                onClick={() => onDeleteContact(id) }
                >
                Delete
            </button>
        </li>)}
</ul>};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact:PropTypes.func.isRequired,
};

export default ContactList;
