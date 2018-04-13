import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { AddExpensesPage } from './pages';

export default class Router extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Route Path="/*" component={AddExpensesPage} />
        </div>
      </HashRouter>
    );
  }
}
