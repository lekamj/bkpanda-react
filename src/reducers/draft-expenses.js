import { Record, List } from 'immutable';
import { actions } from '../constants';

const initialState = new Record({
  draftExpenses: List()
});

export default function DraftExpenseReducer(state = initialState, action = null) {
  const { type, payload } = action;
  switch(type) {
    default:
      return state
  }
}
