import DisplayContexts from '../constants/display_contexts';
import { Constants } from '../actions/application';

const initialState = {
  currentAccount: null,
  currentDisplayContext: DisplayContexts.SHOW_ACCOUNT_COURSES,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case Constants.UPDATE_CURRENT_ACCOUNT: {
      return {
        ...state,
        currentAccount: action.account,
      };
    }
    default:
      return state;
  }
};
