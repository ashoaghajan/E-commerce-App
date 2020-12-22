import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Products from './components/product/Products';
import Navbar from './components/Navbar';
import { getProducts, getCart } from './store/actions/shopActions';
import Cart from './components/cart/Cart';
import Checkout from './components/checkoutForm/Checkout';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
    dispatch(getCart());
    // eslint-disable-next-line
  },[]);

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Products}/>
          <Route path='/cart' component={Cart}/>
          <Route path='/checkout' component={Checkout}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
