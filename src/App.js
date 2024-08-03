import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import PropertyList from './components/PropertyList';
import Header from './components/Header';
import Cart from './components/Cart';
import CheckoutForm from './components/CheckoutForm';
import { CartProvider } from './contexts/CartContext';
import './App.css';

const App = () => {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Header />
          
          <div className="main-content">
            <Switch>
            <Route path="/properties" component={PropertyList} />
            <Route path="/checkout" component={CheckoutForm} />
              <Route path="/cart" component={Cart} />
              <Redirect from="/" to="/properties" />
            </Switch>
          </div>
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;
