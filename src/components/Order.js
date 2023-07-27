

const Order = () => { 
  const [order, setOrder] = useState(0)
  function OrderOne(){
    return setOrder(order + 1)
  }
    return <li>Pizzas: {order}
    <RestaurantButton banana={OrderOne}/> 
    </li>
}

export default Order