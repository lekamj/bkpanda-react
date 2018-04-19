import { actions } from '../constants';

export function addDraftExpense() {
  return {
    type: actions.APPEND_DRAFT_EXPENSE,
    payload: {
      newDraftExpense: {
        name:'ad',
        type:'bc',
        price: 1000 
      }
    }
  }
}
