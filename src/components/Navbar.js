import { Link } from "react-router-dom";
import { useContext } from "react";                       // <== IMPORT 
import { AuthContext } from "./../context/auth.context";  // <== IMPORT
import Nav from 'react-bootstrap/Nav';
import logo from '../images/pr3.png'
import { Button } from "react-bootstrap";




function Navbar() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider `value` prop
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    
      
      <Nav className="justify-content-end" activeKey="/home">
 <div className="nav-itemm">
  <li >
                <a title="logo" href="/"><img className="logo" src={logo} alt="logo" /></a>
                </li>
</div>

    
-
      {isLoggedIn
        ? (<>

            <Link to="/products">
              <button class="btn btn-sm btn-outline-secondary" type="button">Products</button>
            </Link>

            <button class="btn btn-sm btn-outline-secondary" type="button" onClick={logOutUser}>Log out</button>

            <Link to="/add-favorites"> <button class="btn btn-sm btn-outline-secondary" type="button">{user.name}</button> </Link>
 
          </>)
         
        : 
        (<>
       
          <Link to="/signup"> <button class="btn btn-sm btn-outline-secondary" type="button">Signup</button> </Link>
          <Link to="/login"> <button class="btn btn-sm btn-outline-secondary" type="button">Login</button> </Link>
          
        </>)
      }

    </Nav>
  );
}

export default Navbar;