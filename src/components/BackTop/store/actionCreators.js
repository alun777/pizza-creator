import { constants } from './index';

export const toggleScrollTop = (showScrollTop) => ({
  type: constants.TOGGLE_SCROLL_TOP,
  showScrollTop
});