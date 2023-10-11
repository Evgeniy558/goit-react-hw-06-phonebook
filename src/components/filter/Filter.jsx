import { useDispatch } from "react-redux";
import css from "./Filter.module.css";
import { setFilter } from "../redux/slices/filterSlice";

const Filter = () => {
  const dispatch = useDispatch();
  const getSearchValue = (ev) => {
    const searchValue = ev.target.value;
    dispatch(setFilter(searchValue));
  };

  return (
    <div className={css.search_container}>
      <label className={css.label}>
        Find contacts by name
        <input
          className={css.input}
          type="text"
          name="search"
          onChange={getSearchValue}
        ></input>
      </label>
    </div>
  );
};
export default Filter;
