import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { List } from 'immutable'

const styles = {
  container: {
    flex: 1,
    paddingTop: 20,
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  input: {
    marginLeft: 20
  }
}

const InputNames = Object.freeze({
  NAME: 'name',
  TYPE: 'type',
  PRICE: 'price'
});

const PlaceHolderByInputName = Object.freeze({
  [InputNames.NAME]: 'Name',
  [InputNames.TYPE]: 'Type',
  [InputNames.PRICE]: '$XX.XX'
});

const OrderedInputNames = List([
  InputNames.NAME,
  InputNames.TYPE,
  InputNames.PRICE
])

export default class ExpenseInputRow extends Component {
  static propTypes = {
    name: PropTypes.String,
    type: PropTypes.String,
    price: PropTypes.Number
  };

  render() {
    const { name, type, price } = this.props;
    const valueByInputName = {
      [InputNames.NAME]: name,
      [InputNames.TYPE]: type,
      [InputNames.PRICE]: price
    }

    return (
      <div style={styles.container}>
        {OrderedInputNames.map(this.renderInput.bind(this, valueByInputName))}
      </div>
    )
  }

  renderInput = (valueByInputName, inputName, idx) => {
    const placeholder = PlaceHolderByInputName[inputName]
    const value = valueByInputName[inputName]
    return (
      <input style={styles.input}
             type="text"
             name={inputName}
             placeholder={placeholder}
             value={value}/>
    );
  };
}
