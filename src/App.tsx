import React from 'react';
import './App.css';
import Menu from './component/Menu';
import Container from '@material-ui/core/Container';
import Board from './component/Board';
import Introduce from './component/Introduce';
import Dev from './component/Dev';
import Detail from './component/Detail';
import Write from './component/Write';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Menu />
        <Container style={{ marginLeft: 350 }}>
          <Route exact path="/board/:idx" component={Board} />
          <Route exact path="/introduce" component={Introduce} />
          <Route exact path="/dev" component={Dev} />
          <Route exact path="/dev/detail/:idx" component={Detail} />
          <Route exact path="/dev/write" component={Write} />
        </Container>
      </Router>
    </>
  );
}

export default App;
