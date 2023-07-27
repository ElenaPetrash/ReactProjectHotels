import React,{useState}  from "react";
import RestaurantButton from /src/RestaurantButton
import Order from "./components/Order";
const Restaurant = () => {
  
 const [order, setOrder] = useState(0)
  function OrderOne(){
    return setOrder(order + 1)
  }
  
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <Order />
        {/*<li>Pizzas: {order}</li>*/} <RestaurantButton banana={OrderOne}/>  
      </ul>
     
    </div>
  );
};


export default Restaurant 


