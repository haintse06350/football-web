import React, { Component } from 'react';
import { DashboardLayout } from './components/DashboardLayout';
import { LineChartPage } from './pages/LineChart';
import withTheme from './withTheme';
import { Header } from './pages/Header';

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

export const App = withTheme(class extends Component {

  render() {
    return (
      <Router>
        {/* <DashboardLayout>
          <Switch>
            <Route path="/overview" component={() => <div>Overview</div>} />
            <Route path="/cards" component={() => <div>Cards</div>} />
            <Route path="/layout" component={() => <div>Layout</div>} />
            <Route path="/form" component={() => <div>Form</div>} />
            <Route path="/table" component={() => <div>Table</div>} />
            <Route path="/chart" component={LineChartPage} />
            <Redirect to="/" />
          </Switch>
        </DashboardLayout> */}
        <Switch>
          <Route path="/products" component={Header} />
          <Route path="/pricings" component={Header} />
          <Route path="/contact" component={Header} />
          <Route path="/" component={Header} />
        </Switch>
      </Router>
    )
  }
});
