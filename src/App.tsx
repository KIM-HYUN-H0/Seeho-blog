import React from 'react';
import './App.css';
import Menu from './component/Menu';
import Container from '@material-ui/core/Container';
import Board from './component/Board';
// import Introduce from './component/Introduce';
import Detail from './component/Detail';
import Write from './component/Write';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Menu />
        {/* <Route exact path="/introduce" component={Introduce} /> */}
        <Container>
          {/* <Route exact path="/dev" component={Dev} /> */}
          <Route exact path="/:category" component={Board} />
          <Route exact path="/:category/:idx" component={Detail} />
          <Route exact path="/:category/write" component={Write} />
        </Container>
      </Router>
    </>
  );
}

export default App;
