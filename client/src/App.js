import React from 'react'
import { Route } from 'react-router';
// import User from './components/user.component';
import { BrowserRouter } from 'react-router-dom';
import './styles/general.css';
import './components/navbar/navbar.css';
import './pages/home/home.css';
import './components/card/card.css';
import './pages/productDetails/productDetails.css';
import './pages/login/login.css'
import './pages/cart/cart.css'
import './components/paginate/paginate.css'
import './components/spinner/spinner.css';
import Home from './pages/home/home.component';
import ProductDetails from './pages/productDetails/productDetails.component';
import Login from './pages/login/login.component';
import Register from './pages/register/register.component';
import Cart from './pages/cart/cart.component';
function App() {

  return (
    <BrowserRouter>
      <Route exact path='/' component={Home} />
      <Route exact path='/page/:pageNumber' component={Home} />
      <Route exact path='/details/:id' component={ProductDetails} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/register' component={Register} />
      <Route exact path='/cart/:id?' component={Cart} />
    </BrowserRouter>
  );
}

export default App;
