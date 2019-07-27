import React from 'react';
import './index.css';
import PizzaCreatorAppForm from './components/PizzaCreatorAppForm/index';
import { Provider } from 'react-redux';
import store from './store/index';

const App = () => {
  return (
    <Provider store={store}>
      <PizzaCreatorAppForm></PizzaCreatorAppForm>
    </Provider>
  );
}

export default App;
