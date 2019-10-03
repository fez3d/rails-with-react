import React, { Component } from 'react';
import { Provider } from 'react-redux'
import Menu from './Menu';
import Routes from './Routes';
import {HashRouter as Router} from 'react-router-dom';
import createStore from '../src/store/store'

const store = createStore
//store.dispatch(loadArticles());

class App extends Component {
  render() {
    return (
      <div className="App">       
        <Provider store={store}>
          <Router>
            <div className="container">
              <Menu /> 
              <Routes />
            </div>
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;