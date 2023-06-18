import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { setFilter } from 'redux/filter-slice';
import styles from './Filter.module.css';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const handleFilter = e => dispatch(setFilter(e.target.value));

  return (
    <>
      <label className={styles.labelFilter} htmlFor="filter">
        Find contacts by name
      </label>
      <input
        type="text"
        className={styles.inputFilter}
        id="filter"
        name="filter"
        value={filter}
        onChange={handleFilter}
        placeholder="Enter contact name"
      />
    </>
  );
};

export default Filter;
