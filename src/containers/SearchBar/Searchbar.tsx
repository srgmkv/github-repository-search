import * as React from 'react';
import { connect } from 'react-redux';
import { debounce } from 'ts-debounce';
import { IState } from '../../models';
import './SearchBar.css';
import { changeInput, fetchRepos } from '../../actions/index';

interface Props extends InputValue {
  changeInput: typeof changeInput
  fetchRepos: typeof fetchRepos
}

interface InputValue {
  inputValue: string
}

const SearchBar = ({ inputValue, changeInput, fetchRepos }: Props) => {

  const debouncedFetchRepos = debounce(fetchRepos, 1000);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value }: { value: string } = e.target;
    changeInput(value);
    value.length > 2 && debouncedFetchRepos(value);
    console.log('inputValue', inputValue)

  }


  return (
    <div className='input'>
      <input type="text" id="text-input"
        onChange={handleChange}
        value={inputValue}
      />
    </div>
  );
}

const mapStateToProps = (state: IState): InputValue => ({
  inputValue: state.inputValue
});

export default connect(mapStateToProps, { changeInput, fetchRepos })(SearchBar);