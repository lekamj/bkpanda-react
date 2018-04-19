import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import Flexbox from 'flexbox-react';
import { List } from 'immutable';
import { Expense } from '../../models'
import ExpenseInputRow from './expense-input-row'

const styles = {
  button: {
    textAlign: 'left',
    padding: 15,
    border: '1px solid black'
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
      <Flexbox flexDirection={'column'}>
        { draftExpenses && draftExpenses.map(this.renderExpenseInputRow) } 
        <Flexbox flexDirection={'row'}
                 alignItems={'flex-start'}>
          <div style={styles.button} 
               onClick={this.onAddExpense}>
            Add Expenses
          </div>
        </Flexbox>
      </Flexbox>
    );
  }

  onAddExpense = () => {
    console.log('clicked');
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
