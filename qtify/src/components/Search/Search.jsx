import React from "react";
import styles from "./Search.module.css";
import { ReactComponent as SearchIcon } from "../../assets/Search-icon.svg";

function Search({ placeholder }) {
  const onSubmit = (e) => {
    e.preventDefault();
    // process form data here - add logic later
  };
  return (
    <form className={styles.wrapper} onSubmit={onSubmit}>
      <input className={styles.search} required placeholder={placeholder} />
      <button className={styles.searchButton} type="submit">
        <SearchIcon className={styles.SearchIcon} />
      </button>
    </form>
  );
}

export default Search;
