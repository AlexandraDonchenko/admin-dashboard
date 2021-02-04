import React from 'react';
import Styles from '../../../styles/SearchBar.module.scss';

interface Props {
    input:string,
    updateInput:Function
}

const SearchBar: React.FunctionComponent<Props> = ({ input, updateInput }) => {
  const handleChange = (e) => {
    updateInput(e.target.value);
  };
  return (
    <div className={Styles.searchbar}>
      <img className={Styles.searchIcon} src="/media/icons/searchBar/search.svg" alt="search" />
      <input type="text" value={input} onChange={handleChange} />
    </div>
  );
};

export default SearchBar;
