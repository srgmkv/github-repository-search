import * as React from 'react';
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

  //ограничиваем число запросов к серверу
  const debouncedFetchRepos = debounce(fetchRepos, 1000);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value }: { value: string } = e.target;
    changeInput(value); // передаем значение в редьюсер и далее в стейт
    value.length > 2 && debouncedFetchRepos(value); //начинаем поиск после > 2 символов в запросе
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