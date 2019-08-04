import React from 'react';
import './index.css';
import { Provider } from 'react-redux';
import store from './store/index';
import PizzaCreatorAppForm from './components/PizzaCreatorAppForm/index';

const App = () => (
  <Provider store={store}>
    <PizzaCreatorAppForm />
  </Provider>
);

export default App;
