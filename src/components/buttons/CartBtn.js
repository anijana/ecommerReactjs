import React from 'react'
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const CartBtn = () => {
  const myState = useSelector((state)=> state.addItems);
  return (
    <>
        <NavLink to='/cart' className="btn btn-outline-primary ms-2">
            <span className='fa fa-shopping-cart me-1'></span>
            Cart({myState.length})
        </NavLink>
    </>
  )
}

export default CartBtn