import DisplayContexts from '../constants/display_contexts';

const initialState = {
  currentAccount: null,
  currentDisplayContext: DisplayContexts.SHOW_ACCOUNT_COURSES,
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
