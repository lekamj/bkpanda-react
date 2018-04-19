import React, { Component } from 'react';
import { connect } from 'react-redux';
import { List } from 'immutable';
import { AddExpenses } from '../components';
import { addExpenses as addExpensesActions } from '../actions';

@connect((state) => ({
  addExpensesData: state.addExpenses
}))
export default class AddExpensesPage extends Component {
  render () {
    const { addExpensesData } = this.props;
    const draftExpenses = addExpensesData.draftExpenses
    return (
      <AddExpenses draftExpenses={draftExpenses}
                   onAddDraftExpense={this.addDraftExpense}/>
    );
  }

  addDraftExpense = () => {
    const { dispatch } = this.props;
    dispatch(addExpensesActions.addDraftExpense());
  };
}
