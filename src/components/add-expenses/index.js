import React, { Component } from 'react';
import ExpenseInputRow from './expense-input-row'

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
  }

  render() {
    return (
      <div style={styles.container}>
        <div style={styles.title}>
          What is your expense for today?
          <ExpenseInputRow />
        </div>
      </div>
    );
  }
}
