import React from 'react';
import { connect } from 'react-redux';
import Results from './Results';


interface StateProps {
  loading: boolean;
}

const mapStateToProps = (state: any): StateProps => ({
  loading: state.loading
});

const MainSection = ({ loading }: StateProps) => {
  return (
    <>
    {loading ? <div>'Loading...'</div> : <Results />}
    </>
  );
}

export default connect(mapStateToProps)(MainSection);
