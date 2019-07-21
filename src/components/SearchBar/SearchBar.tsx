import React from 'react'
import { connect } from 'react-redux'
import './SearchBar.scss'
import { changeInput } from '../../actions/index'
import { IState } from '../../interfaces'

interface Props {
  changeInput: typeof changeInput
  inputValue: string
}

//Компонент для обработки действий с инпутом
const SearchBar = ({ inputValue, changeInput }: Props) => {

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value }: { value: string } = event.target
    changeInput(value) //отправляем экшн и меняем стейт
   
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

const mapStateToProps = (state: IState): { inputValue: string } => ({
  inputValue: state.inputValue
})

export default connect(mapStateToProps, { changeInput })(SearchBar)