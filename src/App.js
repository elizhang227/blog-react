import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import * as Data from './data/data.json';

import Header from './components/header';
import ListLayout from './components/listLayout';
import Footer from './components/footer';

import Wrapper from './sharedComponents/wrapper';


function App() {
  return (
    <div className="App">
      <Header />
      <Wrapper>
      <ListLayout posts={Data}/>
      </Wrapper>
      <Footer />
    </div>
  );
}

export default App;
