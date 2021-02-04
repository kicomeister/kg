import React from 'react';
import { Country, CountryList, Session, Login, Registration, SlotMachine } from './containers';
import { Page } from './layouts';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Session>
        <Router>
          <Page>
            <Switch>
              <Route path="/slot-machine">
                <SlotMachine />
              </Route>
              <Route path="/registration">
                <Registration />
              </Route>
              <Route path="/Login">
                <Login />
              </Route>
              <Route path="/country-list">
                <CountryList />
              </Route>
              <Route path="/">
                <Country />
              </Route>
            </Switch>
          </Page>
        </Router>
      </Session>
    </div>
  );
}

export default App;
