import React from 'react'
import './App.css';
import { Route } from 'react-router';
import User from './components/user.component';
import { BrowserRouter } from 'react-router-dom';
import Products from './components/products.component';

function App() {

  return (
    <div>
      
      <BrowserRouter>
        <Route exact path='/' component={Products} />
      </BrowserRouter>

    </div>
  );
}

export default App;
