import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { LoginComponent } from './Components/loginComponent';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import NetflixRegisterComponent from './Components/NetflixRegisterComponent';
import DataBindingComponent from './Components/DataBindingComponent';
import NestedIterationComponent from './Components/NestedIterationComponent';
import NetflixIndexComponent from './Components/NetflixIndexComponent';
import DataBindingComponent2 from './Components/DataBindingComponent2';
import ShoppingComponent from './Components/ShoppingComponent';
import EventBindingComponent from './Components/EventBindingComponent';
import TwoWayBinding from './Components/TwoWayBinding';
import ShoppingComponent2 from './Components/ShoppingComponent2';
import TwoWayClassDemo from './Components/TwoWayClassDemo';
import TwoWayClassDemo2 from './Components/TwoWayClassDemo2';
import ShoppingClassDemo from './Components/ShoppingClassDemo';
import FormComponent from './Components/FormComponent';
import FormikDemo from './Components/FormikDemo';
import FormikValidation from './Components/FormikValidation';
import YupValidation from './Components/YupValidation';
import YupValidationComponent from './Components/YupValidationComponent';
import LifeCycleDemo from './Components/LifeCycleDemo';
import ReactHookDemo from './Components/ReactHookDemo';
import ContextDemo from './Components/ContextDemo';
import UserLogin from './Components/UserLogin';
import { Cookies, CookiesProvider } from 'react-cookie';
import ReducerDemo from './Components/ReducerDemo';
import CustomHookDemo from './Components/CustomHookDemo';
import JQueryAjaxDemo from './Components/JQueryAjaxDemo';
import AxiosDemo from './Components/AxiosDemo';
import ShoppingIndex from './Shopping/shoppingIndex';
import SPAComponent from './Components/SPAComponent';
import IShopIndex from './ishop/IShopIndex';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ShoppingComponent/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
