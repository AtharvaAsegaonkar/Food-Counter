import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import { useContext ,useState,useEffect} from 'react';
import CartContext from '../../Store/Cart-context';

const HeaderCartButton = (props) => {
  const [buttonLighted,setbuttonlighted]=useState(false)

  const cartCtx=useContext(CartContext)

  const {items}=cartCtx

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);


  const btnClasses=`${classes.button} ${ buttonLighted? classes.bump:""}`

    useEffect(() =>{
      if(items.length===0) {
        return
      }

      
      setbuttonlighted(true)
      
      const timer = setTimeout(() => {
      setbuttonlighted(false)
    } , 300)

    return()=>{
      clearTimeout(timer)
    }

  },[items])

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
    
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;