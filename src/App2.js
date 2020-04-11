


/* //import logo from './logo.svg';
//import './App.css';


import {Switch, Route, Link, WithRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Trash/Home';
import Profiles from './components/Trash/Profiles';
import Likes from './components/Trash/Likes';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { Col, Row, Form } from "react-bootstrap";
import Badge from 'react-bootstrap/Badge';



import React, {Component} from 'react';
import './App.css';
import './Classes/Item.js';



const SERVERURL ="http://localhost:49895/api/profile/";
class App extends Component {
 render() { 
    return (
    <Container>
      
      <div className="App">
      <Row className="justify-content-md-center">       
      

      <Link to="/" ><Badge pill variant="primary">
      Home
  </Badge></Link>
      <Link to="/Profiles" ><Badge pill variant="info">
    Profiles
  </Badge></Link>
      <Link to="/Likes" ><Badge pill variant="danger">
      Likes
  </Badge></Link>  <br /><br />
    </Row>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/Profiles" component={Profiles} />
      <Route path="/Likes" component={Likes} />
    </div>
  </div>
  </Container>  );
  }
} 
 
export default App;
 */