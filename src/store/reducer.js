import { combineReducers } from 'redux-immutable';
import { reducer as InputDetails } from '../components/InputDetails/store/index';
import { reducer as PizzaCreatorAppForm } from '../components/PizzaCreatorAppForm/store/index';
import { reducer as ToppingsSection } from '../components/ToppingsSection/store/index';

export default combineReducers({
  InputDetails,
  PizzaCreatorAppForm,
  ToppingsSection,
})
