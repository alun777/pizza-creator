import React from 'react';
import './index.css';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import store from './store/index';
import PizzaCreatorAppForm from './components/PizzaCreatorAppForm/index';

const App = () => (
  <Provider store={store}>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Route path="/" exact component={PizzaCreatorAppForm} />
    </BrowserRouter>
  </Provider>
);

export default App;
