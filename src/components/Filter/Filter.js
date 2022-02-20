import PropTypes from 'prop-types';
import styles from './Filter.module.css';

const Filter = ({ filter, onChangeFilter }) => {
    return <div>
        <label className={styles.filterItem}>Find contacts by name
              <input
                type="text"
                value={filter}
                onChange={onChangeFilter}
                name="filter"
              />
            </label>
    </div>
  ;
}  

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    onChangeFilter:PropTypes.func.isRequired,
};


export default Filter;