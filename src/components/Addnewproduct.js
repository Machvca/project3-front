import { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "./../context/auth.context";
import {addProductService} from "./../services/product.services"
const API_URI = process.env.REACT_APP_API_URI;


function AddProduct(props) {
 const [ name, setName ] = useState ("");
	const [type, setType ] = useState("");
	const [ image, setImage ] = useState("");
	const [ color, setColor ] = useState("");
	const [ price, setPrice ] = useState(0);
	const [ description, setDescription ] = useState("");
	const [ link, setLink ] = useState("");

    const {user} = useContext(AuthContext);
	const userId = user._id






  const handleSubmit = async (e) => {
    e.preventDefault();



    const requestBody = { name, type, image, color, price, description, link };

    console.log(requestBody)

    // Get the token from the localStorage
    const storedToken = localStorage.getItem("authToken");

    // Send the token through the request "Authorization" Headers


  try {
			await addProductService(requestBody);
			// Reset the state to clear the inputs
			  setName("");
        setType("");
        setImage("");
        setColor("");
        setPrice("");
        setDescription("");
        setLink("");
			
		} catch (err) {
			console.log(err);
    }
 
  };

  return (
    <div className="AddProject">
      <h3>Add Product</h3>

      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="title"
          value={name}
          onChange={(e) => setName (e.target.value)}
        />


      <label>Type:</label>
        <input
          type="text"
          name="title"
          value={type}
          onChange={(e) => setType (e.target.value)}
        />

  <label>color:</label>
        <input
          type="text"
          name="title"
          value={color}
          onChange={(e) => setColor (e.target.value)}
        />


  <label>Image Link:</label>
        <input
          type="text"
          name="title"
          value={image}
          onChange={(e) => setImage (e.target.value)}
        />

          <label>Price:</label>
        <input
          type="number"
          name="title"
          value={price}
          onChange={(e) => setPrice (e.target.value)}
        />


        <label>Description:</label>
        <textarea
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

  <label>Link to Buy:</label>
        <input
          type="text"
          name="title"
          value={link}
          onChange={(e) => setLink (e.target.value)}
        />




        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddProduct;
