import React, { Component } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import PropTypes from 'prop-types';
import ExpensesAddSheet from './expenses-add-sheet';
import { Expense } from '../../models';

const styles = {
  container: {
    width: '100%'
  },
  title: {
    flex: 1,
    textAlign: 'center'
  }
}

export default class AddExpenses extends Component {
  static propTypes = {
    draftExpenses: ImmutablePropTypes.listOf(
      PropTypes.shape(Expense)
    )
  };

  render() {
    return (
      <div style={styles.container}>
        <div style={styles.title}>
          What is your expense for today?
          <ExpensesAddSheet />
        </div>
      </div>
    );
  }
}
