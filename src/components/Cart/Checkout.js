import { useRef ,useState} from 'react';
import classes from './Chakout.module.css';

const isEmty =(value)=> value.trim ()==="";
const isFiveCharacters= (value) => value.trim().length === 5

const Checkout = (props) => {

    const[formIsValid,setFormIsValid]=useState({
        name:true,
        street:true,
        Pincode:true,
        City:true,
        MobileNumber:true
    });

    const nameInputRef=useRef()
    const streetInputRef=useRef()
    const PincodeInputRef=useRef()
    const CityInputRef=useRef()
    const ContactNumberInputRef=useRef()


  const confirmHandler = (event) => {
    event.preventDefault();
    
    const enteredname = nameInputRef.current.value
    const enteredstreet = streetInputRef.current.value
    const enteredPincode = PincodeInputRef.current.value
    const enteredCity = CityInputRef.current.value
    const enteredContactNumber = ContactNumberInputRef.current.value

    const enteredNameIsValid=!isEmty(enteredname)
    const enteredstreetIsValid=!isEmty(enteredstreet)
    const enteredPincodeIsValid=!isFiveCharacters(enteredPincode)
    const enteredCityIsValid=!isEmty(enteredCity)
    const enteredContactNumberIsValid=!isEmty(enteredContactNumber);

    setFormIsValid({
        name:enteredNameIsValid,
        street:enteredstreetIsValid,
        Pincode:enteredPincodeIsValid,
        City:enteredCityIsValid,
        ContactNumber:enteredContactNumberIsValid,
    })


    const formIsValid=
    enteredCityIsValid&& 
    enteredstreetIsValid&& 
    enteredPincodeIsValid&& 
    enteredContactNumberIsValid&& 
    enteredNameIsValid;

    if(formIsValid) {
        return
    }
    props.onConfirm=({
        name:enteredname,
        street:enteredstreet,
        Pincode:enteredPincode,
        city:enteredCity,
        MobileNumber:enteredContactNumber
    })


  };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={classes.control}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' ref={nameInputRef}/>
        {!formIsValid.name && <p> Please Enter Your Name here !</p>}
      </div>
      <div className={classes.control}>
        <label htmlFor='street'>Street</label>
        <input type='text' id='street' ref={streetInputRef}/>
        {!formIsValid.street && <p> Please Enter Your street here !</p>}
      </div>
      <div className={classes.control}>
        <label htmlFor='pincode'>Pincode</label>
        <input type='text' id='pincode' ref={PincodeInputRef}/>
        {!formIsValid.Pincode && <p> Please Enter Your Pincode here !</p>}
      </div>
      <div className={classes.control}>
        <label htmlFor='city'>City</label>
        <input type='text' id='city' ref={CityInputRef}/>
        {!formIsValid.City && <p> Please Enter Your City here !</p>}
      </div>
      {/* <div className={classes.control}>
        <label htmlFor='mobile number'>Contact Number</label>
        <input type='Number' id='mobile number' ref={ContactNumberInputRef}/>
        {!formIsValid.mobilenumber && <p> Please Enter Your mobile number here !</p>}
      </div> */}
      <div className={classes.actions}>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
       
      </div>
    </form>
  );
};

export default Checkout;