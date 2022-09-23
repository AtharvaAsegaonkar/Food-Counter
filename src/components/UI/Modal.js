import React from 'react'
import classes from "./Modal.module.css"
import ReactDOM  from 'react-dom';

const Backdrop=(props)=>{
  return <div className={classes.backdrop} onClick={props.onHide}>
  </div>
};

const ModalOverlay=(props)=>{
  return ( <div className={classes.modal}>
    <div className={classes.content}>{props.children}</div>
  </div>
  )
}
const portLand=document.getElementById("overlays");

const Modal = (props) => {
  return (
    <div>
    {ReactDOM.createPortal( <Backdrop onHide={props.onHide}/>,portLand)}
    {ReactDOM.createPortal(<ModalOverlay>{props.children}
    </ModalOverlay>,portLand)}
    </div>
  )
}

export default Modal
