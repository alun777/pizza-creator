import { constants } from './index';

export const handleShowErrorAction = (name) => ({
  type: constants.CHANGE_SHOW_ERROR,
  name
});
