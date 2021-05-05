import React from 'react'
import { Route } from 'react-router';
// import User from './components/user.component';
import { BrowserRouter } from 'react-router-dom';
import './styles/navbar.css';
import './styles/general.css';
import './styles/main.css';
import './styles/card.css';
import './styles/productDetails.css';
import './styles/login.css'
import Products from './components/products.component';
import ProductDetails from './components/productDetails.component'
import Login from './components/login.component';
function App() {

  return (
    <BrowserRouter>
      <Route exact path='/' component={Products} />
      <Route exact path='/details/:id' component={ProductDetails} />
      <Route exact path='/login' component={Login} />
    </BrowserRouter>
  );
}

export default App;
