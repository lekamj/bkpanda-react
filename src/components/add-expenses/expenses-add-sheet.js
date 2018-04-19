import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { List } from 'immutable';
import { Expense } from '../../models'
import ExpenseInputRow from './expense-input-row'

const styles = {
  buttonContainer: {
    flex: 1,
    flexDirection: 'column'
  },
  button: {
    flex: 1,
    textAlign: 'left',
    backgroundColor: 'red',
    selfAlign: 'flex-start'
  }
}

export default class ExpensesAddSheet extends Component {
  static propTypes = {
    draftExpenses: ImmutablePropTypes.listOf(
      PropTypes.shape(Expense)
    ),
    onAddDraftExpense: PropTypes.func.isRequired
  };

  render() {
    const { draftExpenses, style } = this.props;
    return (
      <div style={style}>
        { draftExpenses && draftExpenses.map(this.renderExpenseInputRow) } 
        <div style={styles.buttonContainer}>
          <button style={styles.button} 
                  onClick={this.onAddExpense}>
            Add Expenses
          </button>
          <button style={styles.button} 
                  onClick={this.onAddExpense}>
            Add Expenses
          </button>
        </div>
      </div>
    );
  }
  
  renderExpenseInputRow = (draftExpense) => {
    const { name, type, price } = this.props;
    return (
      <ExpenseInputRow name={name}
                       type={type}
                       price={price} />
    );
  }

}
