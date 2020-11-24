import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import AuthProvider from "./lib/AuthProvider";
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Styles.css';
import './css/Handle-elements.css';
import './css/Draggable.css';
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Guest from "./components/Guest";
import Private from "./components/Private";
import Lobby from './components/Lobby';
import Game from './components/Game';
import Home from './components/Home'
import AllRooms from './components/AllRooms'
import HomeOrRooms from './components/HomeOrRooms'
import PrivateRoute from "./routes/PrivateRoute";

class App extends Component {
  render() {
    return (
      <AuthProvider>
        <Navbar />
          <Switch>
            <Route exact path='/' component={HomeOrRooms} />
            <Route exact path='/signup' component={Signup} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/guest' component={Guest} />
            <PrivateRoute exact path='/private' component={Private} />
            <Route exact path='/Lobby' component={Lobby}/>
            <Route exact path='/allRooms' component={AllRooms}/>
            <Route exact path='/rooms/:id' component={Game}/>
          </Switch>
      </AuthProvider>
    );
  }
}

export default App;
