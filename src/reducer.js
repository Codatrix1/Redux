//---------------------------------------
// METHOD 1) USING SWITCH STATEMENTS IN Reducer
//--------------------------------------
/*

import { INCREASE, DECREASE, CLEAR_CART } from "./actions";

const reducer = (state, action) => {
  switch (action.type) {
    case CLEAR_CART:
      return { ...state, cart: [] };
    default:
      return state;
  }
};

export default reducer;

*/

//--------------------------------------------------------------
// ----> METHOD 2) USING IF STATEMENTS IN Reducer: Preferred ✔✔ 🙂
//--------------------------------------------------------------

// redux stuff
import { INCREASE, DECREASE, REMOVE, CLEAR_CART } from "./actions";

const reducer = (state, action) => {
  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }
  //----------------------------------------
  if (action.type === DECREASE) {
    let tempCart = [];

    if (action.payload.amount === 1) {
      tempCart = state.cart.filter((cartItem) => {
        return cartItem.id !== action.payload.id;
      });
    } else {
      tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          cartItem = { ...cartItem, amount: cartItem.amount - 1 };
        }
        return cartItem;
      });
    }
    return { ...state, cart: tempCart };
  }
  //-------------------------------------------
  if (action.type === INCREASE) {
    let tempCart = state.cart.map((cartItem) => {
      if (cartItem.id === action.payload.id) {
        cartItem = { ...cartItem, amount: cartItem.amount + 1 };
      }
      return cartItem;
    });
    return { ...state, cart: tempCart };
  }
  //-------------------------------------------
  if (action.type === REMOVE) {
    return {
      ...state,
      cart: state.cart.filter((cartItem) => {
        return cartItem.id !== action.payload.id;
      }),
    };
  }

  return state;
};

export default reducer;
