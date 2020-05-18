import React, { Component } from 'react';
import { GlobalStyles } from './components/GlobalStyles';
import withTheme from './withTheme';
import { SearchHeader } from './pages/SearchHeader';
import { Layout } from './components/Layout';

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
        <Layout>
          <GlobalStyles />
          <Switch>
            <Route path="/products" component={SearchHeader} />
            <Route path="/pricings" component={SearchHeader} />
            <Route path="/contact" component={SearchHeader} />
            <Route path="/" component={SearchHeader} />
          </Switch>
        </Layout>
      </Router>
    )
  }
});
