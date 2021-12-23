import logo from './logo.svg';
import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateCustomerComponent from './components/CreateCustomerComponent';
import ListCustomerComponent from './components/ListCustomerComponent';
import UpdateCustomerComponent from './components/UpdateCustomerComponent';
import ViewCustomerComponent from './components/ViewCustomerComponent';
import Frontpage from './components/Frontpage';

function App() {
  return (
    <div>
        <Router>
        <HeaderComponent />
                <div className="container">
                    <Switch> 
                        <Route path = "/" exact component = {Frontpage}></Route>
                        <Route path = "/customers" component = {ListCustomerComponent}></Route>
                        <Route path = "/add-customer/:id" component = {CreateCustomerComponent}></Route>
                        <Route path = "/view-customer/:id" component = {ViewCustomerComponent}></Route>  
                        <Route path = "/update-customer/:id" component = {UpdateCustomerComponent}></Route>
                    </Switch>
                </div>
              <FooterComponent />
        </Router>
    </div>
  );
}

export default App;
