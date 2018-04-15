import React, { Component } from 'react';
import { connect } from 'react-redux';
import { List } from 'immutable';
import { AddExpenses } from '../components';

//@connect((state) => ({
//  draftExpenses: state.draftExpenses
//}))
export default class AddExpensesPage extends Component {
  render () {
    const { draftExpenses } = this.props;
    return (
      <AddExpenses draftExpenses={draftExpenses || List()}/>
    );
  }
}
