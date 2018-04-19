import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import Flexbox from 'flexbox-react';
import { List } from 'immutable';
import { Expense } from '../../models';
import ExpenseInputRow from './expense-input-row'

const styles = {
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'yellow'
  },
  title: {
    textAlign: 'center'
  },
  button: {
    textAlign: 'left',
    padding: 15,
    border: '1px solid black'
  }
}

export default class AddExpenses extends Component {
  static propTypes = {
    draftExpenses: ImmutablePropTypes.listOf(
      PropTypes.shape(Expense)
    ),
    onAddDraftExpense: PropTypes.func.isRequired
  };
  
  render() {
    const { draftExpenses, onAddDraftExpense } = this.props;
    return (
      <Flexbox flexDirection='column'>
        <label style={styles.title}>
          What is your expense for today?
        </label>
        <Flexbox flexDirection={'column'}>
          { draftExpenses && draftExpenses.map(this.renderExpenseInputRow) } 
          <Flexbox flexDirection={'row'}
                   alignItems={'flex-start'}>
            <div style={styles.button} 
                 onClick={onAddDraftExpense}>
              Add Expenses
            </div>
          </Flexbox>
        </Flexbox>
      </Flexbox>
    );
  }

  renderExpenseInputRow = (draftExpense, idx) => {
    const { name, type, price } = this.props;
    return (
      <ExpenseInputRow key={idx} 
                       name={name}
                       type={type}
                       price={price} />
    );
  }
}
