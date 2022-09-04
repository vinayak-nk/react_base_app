import { Fragment } from 'react';
import { createPortal } from 'react-dom';
import classes from './style.module.css';


const Backdrop = () => <div className={classes.backdrop} />

const Overlay = (props) => (
  <div className={classes.modal}>
    <div className={classes.content}>
      {props.children}
    </div>
  </div>
)

const portalEl = document.getElementById('overlays')

const Modal = (props) => {
  return (
    <Fragment>
      {createPortal(<Backdrop />, portalEl)}
      {createPortal(<Overlay>{props.children}</Overlay>, portalEl)}
    </Fragment>
  )
}

export default Modal
