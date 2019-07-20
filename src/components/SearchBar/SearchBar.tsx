import * as React from 'react';
import { connect } from 'react-redux';
import { debounce } from 'ts-debounce';
import './SearchBar.scss';
import { changeInput, fetchRepos } from '../../actions/index';

interface Props {
  changeInput: typeof changeInput
  fetchRepos: typeof fetchRepos
}

const SearchBar = ({ changeInput, fetchRepos }: Props) => {

  const debouncedFetchRepos = debounce(fetchRepos, 1000);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value }: { value: string } = e.target;
    changeInput(value);
    value.length > 2 && debouncedFetchRepos(value);
  }

  return (
    <div className='input'>
      <input type="text" id="text-input"
        onChange={handleChange}
      />
    </div>
  );
}

export default connect(null, { changeInput, fetchRepos })(SearchBar);