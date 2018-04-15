import { Record, List } from 'immutable';
import { actions } from '../constants';

const initialState = new Record({
  draftExpenses: new List()
})();

export default function AddExpensesReducer(state = initialState, action = null) { 
  const { type, payload } = action;
  return state;
}
