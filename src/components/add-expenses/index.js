import React, { Component } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import PropTypes from 'prop-types';
import ExpensesAddSheet from './expenses-add-sheet';
import { Expense } from '../../models';

const styles = {
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'yellow'
  },
  title: {
    flex: 1,
    textAlign: 'center'
  },
  expenseSheetContianer: {
    flex: 5,
    backgroundColor: 'blue'
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
          <ExpensesAddSheet style={styles.expenseSheetContianer}/>
        </div>
      </div>
    );
  }
}
