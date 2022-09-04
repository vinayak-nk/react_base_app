import React, { Fragment } from 'react'
import HeaderCart from './Cart'
import mealsIcon from '../../assets/meals.jpg'
import classes from './Header.module.css'

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Food App</h1>
        <HeaderCart />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsIcon} alt="Meals" />
      </div>
    </Fragment>
  )
}

export default Header