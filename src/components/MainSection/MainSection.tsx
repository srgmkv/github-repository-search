import React from 'react';
import { connect } from 'react-redux';
import Results from './Results';
import BgHandler from './BGroundHandler';
import './Main.scss'
import { IState } from '../../interfaces';

interface StateProps {
  loading: boolean
  inputValue: string
}

const mapStateToProps = (state: IState): StateProps => ({
  loading: state.loading,
  inputValue: state.inputValue
});

const MainSection = ({ loading, inputValue }: StateProps) => {


  return (
    <div className="main-section">

      {inputValue.length < 3 && <BgHandler />}
      {loading ? <div id="loader" /> : <Results />}

    </div>
  );
}

export default connect(mapStateToProps)(MainSection);
