import React, { Component } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import Flexbox from 'flexbox-react';
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
    textAlign: 'center'
  },
}

export default class AddExpenses extends Component {
  static propTypes = {
    draftExpenses: ImmutablePropTypes.listOf(
      PropTypes.shape(Expense)
    )
  };
  
  render() {
    const { draftExpenses } = this.props;
    return (
      <Flexbox flexDirection='column'>
        <label style={styles.title}>
          What is your expense for today?
        </label>
        <ExpensesAddSheet style={styles.expenseSheetContianer}
                          draftExpenses={draftExpenses} />
      </Flexbox>
    );
  }

}
