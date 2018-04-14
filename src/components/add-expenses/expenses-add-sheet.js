import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { List } from 'immutable';
import { Expense } from '../../models'
import ExpenseInputRow from './expense-input-row'

export default class ExpensesAddSheet extends Component {
  static propTypes = {
    expenses: ImmutablePropTypes.listOf(
      PropTypes.shape(Expense)
    )
  };

  render() {
    return null;
  }
}
