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
import './components/checkoutBreadCrumbs/breadcrumbs.css'
import './pages/shipment/shipment.css'
import './pages/payment/payment.css'
import './pages/order/order.css'
import './components/spinner/spinner.css';
import Home from './pages/home/home.component';
import ProductDetails from './pages/productDetails/productDetails.component';
import Login from './pages/login/login.component';
import Register from './pages/register/register.component';
import Cart from './pages/cart/cart.component';
import Shipment from './pages/shipment/shipment.component';
import Payment from './pages/payment/payment.component';
import Order from './pages/order/order.component';
import AdminProducts from './pages/admin/adminProducts.component';
import MyOrders from './pages/order/myOrders.component';
import OrderDetails from './pages/order/orderDetails.components';
function App() {

  return (
    <BrowserRouter>
      <Route exact path='/' component={Home} />
      <Route exact path='/search/:keyword' component={Home} />
      <Route exact path='/search/:keyword/page/:pageNumber' component={Home} />
      <Route exact path='/page/:pageNumber' component={Home} />
      <Route exact path='/details/:id' component={ProductDetails} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/register' component={Register} />
      <Route exact path='/cart/:id?' component={Cart} />
      <Route exact path='/shipment' component={Shipment} />
      <Route exact path='/payment' component={Payment} />
      <Route exact path='/order' component={Order} />
      <Route exact path='/user/myorders' component={MyOrders} />
      <Route exact path='/order/:id' component={OrderDetails} />
      <Route exact path='/admin/products' component={AdminProducts} />
    </BrowserRouter>
  );
}

export default App;
