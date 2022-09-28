import { useContext,useState } from 'react';

import Modal from '../UI/Modal';
import CartItem from './CartItem';
import classes from './Cart.module.css';
import CartContext from '../../Store/Cart-context';
import Checkout from './Checkout';

const Cart = (props) => {
  const[isCheckOut,setIsCheckOut] = useState(false)
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({...item, amount: 1});
  };

  const checkHandler = (id) => {
    setIsCheckOut(true)
  }

  const submitOrderHandler =(userData)=>{
    fetch("https://too-hungry-29241-default-rtdb.firebaseio.com/ordered.json",{
    method:"POST",
    body: JSON.stringify({
      user:userData,
      orderedItems:cartCtx.item
    })
  })

  }

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );
const modalActions = 
<div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onHide}>
          Close
        </button>
        {hasItems && <button className={classes.button} onClick={checkHandler}>Order</button>}
      </div>
  return (
    <Modal onHide={props.onHide}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
     {  isCheckOut && <Checkout onConfirm={submitOrderHandler} onCancel={props.onHide}/>}
      {!isCheckOut && modalActions }


      
    </Modal>
  );
};

export default Cart;