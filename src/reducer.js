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
// ----> METHOD 2) USING IF STATEMENTS IN Reducer: Preferred ✔✔ 🙂 --- COMPLETE
//--------------------------------------------------------------

// redux stuff

/*

import { INCREASE, DECREASE, REMOVE, CLEAR_CART, GET_TOTALS } from "./actions";

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

  //-----------------------------------------

  if (action.type === GET_TOTALS) {
    let { total, amount } = state.cart.reduce(
      (cartTotal, cartItem) => {
        const { price, amount } = cartItem;
        const itemTotal = price * amount;

        cartTotal.total += itemTotal;
        cartTotal.amount += amount;
        return cartTotal;
      },
      {
        total: 0,
        amount: 0,
      }
    );
    total = parseFloat(total.toFixed(2));
    return { ...state, total: total, amount: amount };
  }

  return state;
};

export default reducer;



*/

//---------------------------------------------------------------------------------------
//                         ----> REFACTORED ABOVE CODE - REDUX ✔✔ 🙂
//--------------------------------------------------------------------------------------

// redux stuff
import cartItems from "./cart-items"; // items

import {
  INCREASE,
  DECREASE,
  REMOVE,
  CLEAR_CART,
  GET_TOTALS,
  TOGGLE_AMOUNT,
} from "./actions";

// initial store
const initialStore = {
  cart: cartItems,
  total: 0,
  amount: 0,
};

const reducer = (state = initialStore, action) => {
  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }
  //----------------------------------------
  if (action.type === DECREASE) {
    let tempCart = state.cart.map((cartItem) => {
      if (cartItem.id === action.payload.id) {
        cartItem = { ...cartItem, amount: cartItem.amount - 1 };
      }
      return cartItem;
    });

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

  //-----------------------------------------

  if (action.type === GET_TOTALS) {
    let { total, amount } = state.cart.reduce(
      (cartTotal, cartItem) => {
        const { price, amount } = cartItem;
        const itemTotal = price * amount;

        cartTotal.total += itemTotal;
        cartTotal.amount += amount;

        return cartTotal;
      },
      {
        total: 0,
        amount: 0,
      }
    );
    total = parseFloat(total.toFixed(2));
    return { ...state, total: total, amount: amount };
  }

  //--------------------------------

  if (action.type === TOGGLE_AMOUNT) {
    return {
      ...state,
      cart: state.cart.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          if (action.payload.toggle === "inc") {
            return (cartItem = { ...cartItem, amount: cartItem.amount + 1 });
          }
        }
        if (cartItem.id === action.payload.id) {
          if (action.payload.toggle === "dec") {
            return (cartItem = { ...cartItem, amount: cartItem.amount - 1 });
          }
        }
        return cartItem;
      }),
    };
  }

  return state;
};

export default reducer;
