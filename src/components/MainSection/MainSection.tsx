import React from 'react';
import { connect } from 'react-redux';
import Results from './Results/Results';
import BgImage from '../../containers/BGhandler';
import './Main.css'
import { IState } from '../../models';


interface StateProps {
  loading: boolean;
  inputValue: string,
  error: boolean
}

const mapStateToProps = (state: IState): StateProps => ({
  loading: state.loading,
  inputValue: state.inputValue,
  error: state.error

});

const MainSection: React.FC<StateProps> = ({ loading, inputValue, error }) => {


  return (
    <div className="main-section">
      {inputValue.length < 3 && <BgImage />}
      {error && <BgImage spec='error' />}
      {loading ? <div id="loader" /> : <Results />}

    </div>
  );
}

export default connect(mapStateToProps)(MainSection);
