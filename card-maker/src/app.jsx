import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styles from './app.module.css';
import Login from './components/login/login';
import Main from './components/main/main';

function App({ authService }) {
  return (
    <Router>
      <div className={styles.app}>
        <Switch>
          <Route path="/app">
            <Main authService={authService} />
          </Route>
          <Route path="/" exact>
            <Login authService={authService} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
