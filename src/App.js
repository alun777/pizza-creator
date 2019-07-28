import React from 'react';
import './index.css';
import store from './store/index';
import { Provider } from 'react-redux';
import PizzaCreatorAppForm from './components/PizzaCreatorAppForm/index';



const App = () => {
  return (
    <Provider store={store}>
      <PizzaCreatorAppForm></PizzaCreatorAppForm>
    </Provider>
  );
}

export default App;
