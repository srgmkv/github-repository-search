import React from 'react';
import { connect } from 'react-redux';
import Results from './Results/Results';
//import Image from './Image/Image';
import './Main.css'
//import Loader from './Image/Loader/Loader';
import Error from './Error/Error'
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

const MainSection: React.FC<StateProps> = ({ loading, inputValue, error }: StateProps) => {


  return (
    <div className="main-section">
      {inputValue.length < 3 &&  <div id="image" />}
      {error && <Error />}
      {loading ? <div id="loader" /> : <Results />}

    </div>
  );
}

export default connect(mapStateToProps)(MainSection);
