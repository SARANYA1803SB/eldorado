import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';

import App from './App';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';
import ResetPasswordPage from './pages/ResetPasswordPage/ResetPasswordPage';
import AddProductPage from './pages/AddProductPage/AddProductPage';
import AdminProductDetailsPage from './pages/AdminProductDetailsPage/AdminProductDetailsPage';
import CustomerProductDetailsPage from './pages/CustomerProductDetailsPage/CustomerProductDetailsPage';
import ProductListPage from './pages/ProductListPage/ProductListPage';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/register" component={RegistrationPage} />
        <Route path="/reset-password" component={ResetPasswordPage} />
        <Route path="/admin/addproduct" component={AddProductPage}/>
        <Route path="/admin/product/{prodid}" component={AdminProductDetailsPage}/>
        <Route path="/customer/product/{prodid}" component={CustomerProductDetailsPage}/>
        <Route path="/customer/products" component={ProductListPage}/>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
