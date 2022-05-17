import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { delItem } from "../redux/actions/index";
import { NavLink } from "react-router-dom";

const Cart = () => {
  const myState = useSelector((state) => state.addItems);
  const dispatch = useDispatch();

  const handleClose = (item) => {
    dispatch(delItem(item));
  };

  const cartItems = (cartItem) => {
    return (
      <div className="px-4 my-5 bg-light rounded-3" key={cartItem.id}>
        <div className="container py-4">
          <button
            onClick={() => handleClose(cartItem)}
            className="btn-close float-end"
            aria-label="close"
          ></button>
          <div className="row justify-content-cent">
            <div className="col-md-4">
              <img
                src={cartItem.image}
                alt={cartItem.title}
                height="200px"
                width="200px"
              />
            </div>
            <div className="col-md-4">
              <h3>{cartItem.title}</h3>
              <p className="lead fw-bold">₹{cartItem.price}</p>
              <p>{cartItem.desc}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const emptyCart = () => {
    return (
      <div className="px-4 my-5 bg-light rounded-3 text-center py-5">
        <div className="container py-4">
            <div className="row">
                <h1>Your Cart is Empty</h1>
            </div>
        </div>
      </div>
    );
  };

  const button = () =>{
      return(
          <div className="container">
              <div className="row">
                  <NavLink to='/checkout' className="btn btn-outline-primary mb-5 w-25 mx-auto">Process To CheckOut</NavLink>
              </div>
          </div>
      )
  }
  return (
    <>
      {myState.length === 0 && emptyCart()}
      {myState.length !== 0 && myState.map(cartItems)}
      {myState.length !== 0 && button()}
    </>
  );
};

export default Cart;
