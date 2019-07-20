import React from 'react';
import './index.scss'
import Header from '../../components/Header/Header';
import SearchBar from '../../components/SearchBar/SearchBar';
import MainSection from '../../components/MainSection/MainSection';



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