import React from 'react'

const CartContext = React.createContext({
    item:[],
    TotalAmount:0,
    addItem:(item)=>{},
    removeItem:(id)=>{}
})



export default CartContext
