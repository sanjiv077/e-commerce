import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({children}) => {
  const [cart , setCart] = useState([]);

  const addtoCart = (data) => {
    setCart([...cart,{...data, quantity : 1 }])
}

  return (
    <CartContext.Provider value={{addtoCart , cart}}>
      {children}
    </CartContext.Provider>
  )
}
