import { Record, List } from 'immutable';
import { actions } from '../constants';

const initialState = new Record({
  draftExpenses: new List()
})();

export default function AddExpensesReducer(state = initialState, action = null) { 
  const { type, payload } = action;
  switch (type) {
    case actions.APPEND_DRAFT_EXPENSE:
      return state.update('draftExpenses', (draftExpenses) => (
        draftExpenses.push(payload.newDraftExpense)
      ));
    default:
      return state;
  }
}
