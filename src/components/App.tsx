import React from 'react';

import Header from './Header/Header';
import SearchBar from '../containers/SearchBar/SearchBar';
import MainSection from './MainSection/MainSection';



const App = () => {
  return (
    <>
      <Header />
      <SearchBar />
      <MainSection />
    </>
  );
}

export default App;