import wrapper from '../../../libs/constants/wrapper';

// Local actions
const actions = [
  'UPDATE_DISPLAY_CONTEXT',
  'UPDATE_CURRENT_ACCOUNT'
];

// Actions that make an api request
const requests = [];

export const Constants = wrapper(actions, requests);

export const updateDisplayContext = context => ({
  type: Constants.UPDATE_DISPLAY_CONTEXT,
  context,
});

export const updateCurrentAccount = account => ({
  type: Constants.UPDATE_CURRENT_ACCOUNT,
  account,
});

