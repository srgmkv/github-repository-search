import React from 'react';
import { connect } from 'react-redux';
import { debounce } from 'ts-debounce';
import './SearchBar.scss';
import { changeInput, fetchRepos } from '../../actions/index';

interface Props {
  changeInput: typeof changeInput
  fetchRepos: typeof fetchRepos
}

//Компонент для обработки действий с инпутом
const SearchBar = ({ changeInput, fetchRepos }: Props) => {

  //ф-я, ограничивает число запросов к серверу
  const debouncedFetchRepos = debounce(fetchRepos, 1000);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value }: { value: string } = event.target;
    // меняем  inputValue в стейте
    changeInput(value);
    //отправляем запрос на сервер
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