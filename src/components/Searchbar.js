import { Link } from "react-router-dom";
import { useContext } from "react";                       // <== IMPORT 
import { AuthContext } from "./../context/auth.context";  // <== IMPORT
import Nav from 'react-bootstrap/Nav';
import logo from '../images/devstuff.png'
import { Button } from "react-bootstrap";

function Searchbar() {
    
    return (
        
        
        <div class="btn-group">
        <a href="/products/monitors" class="btn btn-secondary" aria-current="page">Monitors</a>
        <a href="/products/keyboards" class="btn btn-secondary" aria-current="page">Keyboards</a>
        <a href="/products/mouses" class="btn btn-secondary" aria-current="page">Mouses</a>
        <a href="/products/headphones" class="btn btn-secondary" aria-current="page">Headphones</a>
        <a href="/products/chairs" class="btn btn-secondary" aria-current="page">Chairs</a>
        <a href="/products/accesories" class="btn btn-secondary" aria-current="page">Accesories</a>
        <a href="/products/merchandising" class="btn btn-secondary" aria-current="page">Merchandise</a>
        <a href="/products/snacks" class="btn btn-secondary" aria-current="page">Snacks</a>
      
        </div>


    )
}

export default Searchbar;