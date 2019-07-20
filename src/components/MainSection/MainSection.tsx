import React from 'react';
import { connect } from 'react-redux';
import Results from './Results';
import BGroundHandler from './BGroundHandler';
import './Main.scss';
import { IState } from '../../interfaces';

interface StateProps {
  loading: boolean
  inputValue: string
}

//Компонент генерирует блок под полем ввода
const MainSection = ({ loading, inputValue }: StateProps) => {
  return (
    <div className="main-section">

      {inputValue.length < 3 && <BGroundHandler />} {/* показываем дефолтный фон, по значению инпута */}
      {loading ? <div id="loader" /> : <Results />}

    </div>
  );
}

const mapStateToProps = (state: IState): StateProps => ({
  loading: state.loading,
  inputValue: state.inputValue
});

export default connect(mapStateToProps)(MainSection);