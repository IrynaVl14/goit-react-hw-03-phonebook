import PropTypes from 'prop-types';
import styles from './ContactItem.module.css';

const ContactItem = ({ name, number, onDelete }) => {
    return <>
    <p className={styles.contactListData}>{name} : {number}</p>
        <button
            className={styles.contactListBtn}
            type="button"
            onClick={onDelete}
        >
            Delete
        </button>
    </>
};

ContactItem.propTypes = {
    name: PropTypes.string.isRequired,
    number:PropTypes.string.isRequired,
    onDelete:PropTypes.func.isRequired,
};

export default ContactItem;