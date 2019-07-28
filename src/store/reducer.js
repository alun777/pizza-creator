import { combineReducers } from 'redux';
import { reducer as InputDetailsReducers } from '../components/InputDetails/store/index';
import { reducer as PizzaCreatorAppFormReducers } from '../components/PizzaCreatorAppForm/store/index';
import { reducer as ToppingsSectionReducers } from '../components/ToppingsSection/store/index';

export default combineReducers({
  InputDetails: InputDetailsReducers,
  PizzaCreatorAppForm: PizzaCreatorAppFormReducers,
  ToppingsSection: ToppingsSectionReducers,
})
