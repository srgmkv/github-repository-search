import React from 'react';

import Header from './Header/Header';
import SearchBar from '../containers/Searchbar';
import MainSection from '../containers/MainSection';



const App: React.FC = () => {
  return (
    <>
    <Header />
    <SearchBar />
    <MainSection />
    </>
  );
}

export default App;