import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import * as Data from './data/data.json';

import Nav from './components/nav';
import Header from './components/header';
import ListLayout from './components/listLayout';
import PostLayout from './components/postLayout';
import Footer from './components/footer';

import Wrapper from './sharedComponents/wrapper';

const routesArray = [
  {linkRoute: '/', linkName: 'Homepage'}
]


function App() {
  return (
    <div className="App">
      <Router>
        <Nav routes={routesArray} />
        <Header />
        <Wrapper>
          <Route path='/' exact render={() => <ListLayout posts={Data}/>} />
          <Route path='/post/:id?' render={routeProps => <PostLayout posts={Data} {...routeProps} />} />
        </Wrapper>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
