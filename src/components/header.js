import logo from './react imgs/Flilogo.jpg';
import {Link} from 'react-router-dom';
import React, {useState , useEffect} from 'react';
import { useHistory } from "react-router-dom";
import { subject } from '../services/subject';
function Header() {
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  let history = useHistory();
  const navBar=[
    {name : 'Home'},
    {name : 'products'},
    // {name : 'Employees'},
    {name : 'Sign up'},
    {name : 'Users'},
    {name : 'Login'},
    {name : 'Cart'}
  ];
  // const homePage=() => {

  // };
  const logout = () => {
    history.push('/Login');
    subject.next('User logout');
  }
  subject.subscribe(res => {
    if (res === 'User Logged In') {
      setUserLoggedIn(true);

    } else{
      setUserLoggedIn(false);
    }
  });
  useEffect( () =>{
    console.log(userLoggedIn);
    return() => {
      console.log('header is unmounted');
    }
  }, [userLoggedIn]);
  return(
    <nav className="navbar navbar-expand-lg navbar-light bg-primary">
    <a className="navbar-brand" ><img src={logo} alt={'Flipcart'} width={'300px'} height={'70px'}/></a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

   
  
    <div className="collapse navbar-collapse"  id="navbarSupportedContent">
      
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to={'/'}> <i className="fa fa-home p-1" aria-hidden="true"></i>{navBar[0].name}</Link>
        </li>
        {userLoggedIn ? (
          <li className="nav-item">
          <Link className="nav-link" to={'/products'}><i className="fa fa-tablet  p-1" aria-hidden="true"></i>{navBar[1].name}</Link>
        </li>
        ) :(
          <React.Fragment>

          </React.Fragment>
          
        )}
        
        {/* <li className="nav-item">
          <a className="nav-link" >{navBar[2].name}</a>
        </li> */}
        {userLoggedIn ? (
          <React.Fragment>

          </React.Fragment>
        ) :(
          <li className="nav-item">
          <Link className="nav-link" to={'/registration'}><i className="fa fa-user-circle  p-1" aria-hidden="true"></i>{navBar[2].name}</Link>
        </li>
        )}
         {userLoggedIn ? (
          <li className="nav-item">
          <Link className="nav-link" to={'/users'}><i className="fa fa-users  p-1" aria-hidden="true p-1"></i>{navBar[3].name}</Link>
        </li>
        ) :(
          <React.Fragment>

          </React.Fragment>
          
        )}
        {userLoggedIn ? (
        <li className="nav-item" onClick={logout}><span className="nav-link"><i className="fa fa-sign-out  p-1" aria-hidden="true"></i>Logout</span>
        </li>) : (
           <li className="nav-item">
          <Link className="nav-link" to={'/Login'} ><i className="fa fa-sign-in  p-1" aria-hidden="true"></i>{navBar[4].name}</Link>
        </li>
        )}
        <li className="nav-item">
          <Link className="nav-link" to={'/cart'}> <i className="fa fa-shopping-cart p-1"></i>{navBar[5].name}</Link>
        </li>
        {userLoggedIn ? (
           <li className="nav-item dropdown">
           <a className="nav-link dropdown-toggle"   id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
             Dropdown
           </a>
           <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <ul>
               <li className="nav-item">
               <Link className="nav-link" to={'/myorders'}> <i className="fa fa-shopping-cart  p-1"></i>My orders</Link>
                </li>
                <li className="nav-item">
               <Link className="nav-link" to={'/myprofile'}> <i className="fa fa-shopping-cart p-1"></i>My Profile</Link>
                </li>
            </ul>
           </div>
         </li>

        ) :(
          <React.Fragment>

          </React.Fragment>
        )}
        
       
      </ul>
      <form className="form-inline my-2 my-lg-6">
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-dark my-2 my-sm-0 active" type="submit">Search</button>
      </form>
      
    </div>
  </nav>

  );

}
export default Header;