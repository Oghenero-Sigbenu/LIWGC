import React, { Component } from 'react';
import {Route, Switch } from 'react-router-dom';

//Components
import Home from "./Components/Home";
import Forum from "./Components/Forum";
import YouthChurch from './Components/YouthChurch';
import TopicDetail from "./Components/topicDetail";
//static Assets
import './App.css';
import './assets/fonts/Poppins-Bold.ttf';
import './assets/fonts/Poppins-Regular.ttf';
import './assets/fonts/Poppins-SemiBold.ttf';

class App extends Component{
    render(){
        return (
              <div className="App">
                  <Switch>
                      <Route path="/topic/:id" component={TopicDetail}/>
                      <Route path="/youth" component={YouthChurch}/>
                      <Route path="/forum" component={Forum}/> 
                      <Route path="/" exact component={Home} />
                      <Route render={() => <h2>Not Found</h2>} />
                  </Switch>
              </div>
        );
    }
};

export default App;
