import { actionCreators, constants } from './index';

it('should create an action to change the state of ShowError', () => {
  const name = 'name';
  const expectedAction = {
    type: constants.CHANGE_SHOW_ERROR,
    name
  }
  expect(actionCreators.handleShowErrorAction(name)).toEqual(expectedAction)
})
