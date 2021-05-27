import './App.css';
import React from 'react';
import Header from './components/header';
// import Footer from './components/footer';
import {BrowserRouter, Route } from 'react-router-dom';
import Homepage from './screens/homepage';
import RegisterScreen from './screens/registration';
import LoginScreens from './screens/login'
import UsersScreen from './screens/users';
import Cartcomponent from './screens/cart';
import Specificproduct from './screens/specificproduct';
import Myorders from './screens/myOders';
import MyProfile from './screens/myprofile';
import Updateprofile from './screens/updateprofile';

const Products = React.lazy(()=> import('./screens/products'));

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <React.Suspense fallback={<div>Loading...</div>}>  
      <Route path="/" component={Homepage} exact>
        </Route>
      <Route path="/products" component={Products} exact />
      <Route path="/Specificproduct/:productId" component={Specificproduct} />
      <Route path="/registration" component={RegisterScreen} excat />
      <Route path="/users" component={UsersScreen} excat />
      <Route path="/Login" component={LoginScreens} excat />
      <Route path="/cart" component={Cartcomponent} excat />
      <Route path="/myOrders" component={Myorders} excat />
      <Route path="/myprofile" component={MyProfile} excat />
      <Route path="/updateprofile" component={Updateprofile} excat />
      </React.Suspense>
      {/* <Footer /> */}
    </div>
    </BrowserRouter>
  );
}

export default App;
