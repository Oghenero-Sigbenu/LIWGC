import React, { Component } from 'react';
import {Route, Switch } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

//Components
import Home from "./Components/Home";
import Forum from "./Components/Forum";
import YouthChurch from './Components/YouthChurch';
import TopicDetail from "./Components/topicDetail";
import About from "./Components/About";
import Live from "./Components/Livestream";
import Download from "./Components/download";

//static Assets
import './App.css';
import "./index.css";
import './assets/fonts/Poppins-Bold.ttf';
import './assets/fonts/Poppins-Regular.ttf';
import './assets/fonts/Poppins-SemiBold.ttf';

class App extends Component{
    render(){
        return (
              <div className="App">
                  <Switch>
                      <Route path="/topicDetail" component={TopicDetail}/>
                      <Route path="/youth" component={YouthChurch}/>
                      <Route path="/forum" component={Forum}/> 
                      <Route path="/live" component={Live}/> 
                      <Route path="/download" component={Download}/> 
                      <Route path="/about" component={About}/> 
                      <Route path="/" exact component={Home} />
                      <Route render={() => <h2>Not Found</h2>} />
                  </Switch>
              </div>
        );
    }
};

export default App;
