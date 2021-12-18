/*

Whats Cool about "mapStateToProps", is that Not only we can map our state values to our props, but also automatically we map our dispatch function to a dispatch prop

*/

import React, { useEffect } from "react";
import CartItem from "./CartItem";

// redux stuff
import { connect } from "react-redux";
import { CLEAR_CART, GET_TOTALS } from "../actions";

const CartContainer = ({ cart = [], total, dispatch }) => {
  // runs each and every time, the component re-renders w/ dependency array
  useEffect(() => {
    dispatch({ type: GET_TOTALS });
  }, [cart, dispatch]);

  if (cart.length === 0) {
    return (
      <section className="cart">
        {/* cart header */}
        <header>
          <h3>your cart</h3>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }

  return (
    <section className="cart">
      {/* cart header */}
      <header>
        <h3>your cart</h3>
      </header>
      {/* cart items */}
      <article>
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </article>
      {/* cart footer */}
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${total}</span>
          </h4>
        </div>

        <button
          className="btn clear-btn"
          onClick={() => dispatch({ type: CLEAR_CART })}
        >
          clear cart
        </button>
      </footer>
    </section>
  );
};

const mapStateToProps = (store) => {
  // console.log(store);

  // with ES6 Syntax, we can write just "return { cart, total }"
  const { cart, total } = store;
  return {
    cart: cart,
    total: total,
  };
};

export default connect(mapStateToProps)(CartContainer);
