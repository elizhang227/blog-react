import React from 'react';
import styled from 'styled-components';

import * as Data from './data/data.json';

import Header from './components/header';
import ListLayout from './components/listLayout';
import Footer from './components/footer';

import Wrapper from './sharedComponents/wrapper';


function App() {
  console.log('data should be here', Data);
  return (
    <div className="App">
      <Header />
      <Wrapper>
        <ListLayout />
      </Wrapper>
      <Footer />
    </div>
  );
}

export default App;
