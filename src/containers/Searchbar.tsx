import * as React from 'react';
import { connect } from 'react-redux';

import { changeInput, fetchRepos } from '../actions/index';

interface Props {
  changeInput: typeof changeInput;
  fetchRepos: typeof fetchRepos;
}

const SearchBar = ({ changeInput, fetchRepos }: Props) => {

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value }: { value: string } = e.target;
    changeInput(value);
    fetchRepos(value);
  }


  return (
    <>
      <input type="text" id="text-input" 
        onChange={handleChange} />
      <button>Search</button>
    </>
  );
}

export default connect(null, { changeInput, fetchRepos })(SearchBar);