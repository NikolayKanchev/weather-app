import React, { Component } from 'react';
import { 
  BrowserRouter as Router, 
  Route, 
  Switch, 
} from 'react-router-dom';

import AppBar from './components/appBar/AppBar';
import Copyright from './components/copyRight/Copyright';
import Home from './containers/home/Home';
import Week from './containers/week/Week';

import { 
  initialState, 
  reducer, 
  StateProvider 
} from './utils/State';

import { Container, Box } from '@material-ui/core';
import './App.css';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      appName: "Wether App",
    }
  }

  render() {
    const {appName} = this.state;

    return (
      <>
        <StateProvider initialState={initialState} reducer={reducer}>
          <div className="App">
            <Router>
              <AppBar appName={appName} />
              <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/week" component={Week} exact/>
              </Switch>
            </Router>
          </div>

          <Container component="main" maxWidth="sm">
            <Box mt={8}>
                <Copyright company={appName}/>
            </Box>
          </Container>

        </StateProvider>
      </>
    );
  }
}

export default App;
