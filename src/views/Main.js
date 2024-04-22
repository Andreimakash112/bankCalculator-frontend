import React,{useState,useEffect} from 'react';
import './Main.css';
import Product from '../components/Product';


function Main({ setMessage, setProductData}) { 
  const[products, setProducts] = useState([])
 
  useEffect(() => {

   const api = 'http://127.0.0.1:9001/products'

  fetch(api)
  .then(result => result.json())
  .then((result) => {
    console.log(result)
    setProducts(result.data)
  }) 
  }, [])
  


  return (
    <div className="Main">
  


  
      {products.map((item) => <Product key={item._id} id={item._id}   ratio={item.ratio}
           condition={item.condition}nameInfo={item.nameInfo}nameCalc={item.nameCalc}
         setMessage={setMessage}  setProductData={setProductData}    />)}
      



      
    </div>
  );





}

export default Main;