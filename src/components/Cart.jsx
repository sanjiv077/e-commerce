import {useEffect, useState} from 'react';

function Cart({ cart }) {
  const [CART , setCART] = useState([])

  useEffect(() => {
    setCART(cart)
  } , [cart])

  
  return (
    <div>
      {CART.map((cartItem , cartindex) => (
        <div key={cartItem.id} className='mx-5'>
          <img
            src={cartItem.image}
            alt={cartItem.title}
            style={{ width: "40px", height: "40px" }}
          />
          <span className='mx-3'>{cartItem.title}</span>
          
          <button className='mx-3'
          onClick={
            () => {
              const _CART = CART.map((item , index) => {
                return cartindex === index ? {...item , quantity: item.quantity > 1 ? item.quantity-1 : (alert("there should be atleast one item") , 1)} : item
              })
              setCART(_CART)

            }
          }
          > - </button>
          <span>{cartItem.quantity} </span>
          <button 
          onClick={() => {
            const _CART = CART.map((item , index) => {
              return cartindex === index ? {...item , quantity: item.quantity + 1} : item
            })
            setCART(_CART)
          }}
          >+</button>

          <span className='mx-3'>${cartItem.price * cartItem.quantity}</span>
        </div>
      ))}

      <p className='mx-5'>
        Total amount = $
        {
          CART.map(item => item.price * item.quantity).reduce((total , value) => total + value , 0)
        }
      </p>
    </div>
  );
}

export default Cart;
