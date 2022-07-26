import { Link } from "react-router-dom";
import { useContext } from "react";                       // <== IMPORT 
import { AuthContext } from "./../context/auth.context";  // <== IMPORT
import Nav from 'react-bootstrap/Nav';
import logo from '../images/devstuff.png'
import { Button } from "react-bootstrap";




function Navbar() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider `value` prop
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    

<ul class="nav nav-pills nav-fill navcolors">
  <li class="nav-item">
    <a title="logo" href="/"><img className="logo" src={logo} alt="logo"/></a>
  </li>




{isLoggedIn
        ? 
  (<>
  <li class="nav-item">
    <a class="nav-link" href="/products">Products</a>
  </li>


  <li class="nav-item">
    <a class="nav-link" href="/products/add-product">Add Product</a>
  </li>





  <li class="nav-item">
    <a class="nav-link"  onClick={logOutUser}>Log out</a>
  </li>

  <li class="nav-item">
    <a class="nav-link" href="/products/add-favorite">My Profile</a>
  </li>
  </>)

: 
(<>

<li class="nav-item">
    <a class="nav-link" href="/signup">Signup</a>
  </li>

<li class="nav-item">
    <a class="nav-link" href="/login">Login</a>
  </li>
          
  </>)
      }

    </ul>
    
  );
}

export default Navbar;