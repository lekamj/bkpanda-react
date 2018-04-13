import React, { Component } from 'react';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    flex: 1,
    justifyContent: 'stretch',
    backgroundColor: 'red'
  }
}

export default class AddExpenses extends Component {
  render() {
    return (
      <div style={styles.container}>
      </div>
    );
  }
}
