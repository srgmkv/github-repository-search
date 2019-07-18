import React from 'react';

import Header from './Header/Header';
import SearchBar from '../containers/SearchBar/Searchbar';
import MainSection from './MainSection/MainSection';



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