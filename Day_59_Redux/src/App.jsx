import React from 'react'
import { Products } from './Data'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart, itemsInCart, removeSpecificItem  } from './redux/cart/Index'


const App = () => {
  const cart = useSelector((state) => state.cart)
  const dispatch = useDispatch()
  const ItemsInCart = useSelector(itemsInCart)
  console.log("My Cart Items: ", ItemsInCart);
  return (
    <>
      {Products.map((item)=><div key={item.id} style={{width:'500px', margin:'auto', textAlign:'center'}}>
        <div style={{display:'flex', justifyContent:'center', alignItems:'center', margin:'20px' }}>
          <img src={item.imgSrc} alt="" style={{width:'300px'}} />
        </div>
        <button onClick={() => dispatch(addToCart(item))}>Add to Cart</button>
        <button onClick={() => dispatch(removeSpecificItem(item.id))}>Remove Item</button>
      </div>)}
    </>
  )
}

export default App