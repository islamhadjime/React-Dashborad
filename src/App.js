import React from 'react'


import Navbar from './components/Navbar/Navbar';
import Search from './components/Search';
import Persions from './components/Persions';
import Message from './components/Message';
import Down from './components/Down';
import SkilPerrsion from './components/SkilPerrsion';
import Popular from './components/Popular';
import Cards from './components/Cards';
import Engent from './components/Engent';



function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main">
        <Search />
        <div className='main__conetnt'>
          <div className='left__label'>
            <Popular/>
            <Cards/>
            <Engent/>
          </div>
          <div className='right__label'>
            <Down />
            <SkilPerrsion/>
          </div>
        </div>
      </div>
      <div className="siderbar">
        <Persions />
        <Message />
      </div>
    </div>
  );
}

export default App;
