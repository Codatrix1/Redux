//------------------------------------
// LECTURE 376
//            REDUX -----> STORE
//-------------------------------------

/*


import React from "react";
import Navbar from "./components/Navbar"; // components
import CartContainer from "./components/CartContainer";

import cartItems from "./cart-items"; // items

//----------------------------
// Redux stuff: Redux is an app level state managemnet library:
// We can avoid prop drilling with using Redux
//
// store : ---> stores data, think of state, single source of truth
// reducer : --> just a regular JavScript function that is used to update store
//----------------------------

import { createStore } from "redux";

// Reducer function
const reducer = () => {
  console.log("Wubba lubba dub dub");
};

const store = createStore(reducer);

const App = function () {
  // cart setup

  return (
    <main>
      <Navbar />
      <CartContainer cart={cartItems} />
    </main>
  );
};

export default App;

*/

//------------------------------------
// LECTURE 377
//            REDUX -----> Reducer
//-------------------------------------

/*


// store : ---> stores data, think of state
// reducer : --> function that is used to update store: Takes 2 args: --> reducer(state, action)
// state :  --> old state/state before update
// action: ---> what happened/what update
// return updated or old state
//----------------------------

import React from "react";
import { createStore } from "redux";

import Navbar from "./components/Navbar"; // components
import CartContainer from "./components/CartContainer";
import cartItems from "./cart-items"; // items

// reducer function
const reducer = (state, action) => {
  console.log({ state, action });
  return state;
};

// initial store
const initialStore = {
  count: 0,
};

const store = createStore(reducer, initialStore);

const App = function () {
  // cart setup

  return (
    <main>
      <Navbar />
      <CartContainer cart={cartItems} />
    </main>
  );
};

export default App;

*/

//------------------------------------
// LECTURE 378
//            REDUX -----> getState
//-------------------------------------

/*

// Redux stuff
//
// store : ---> stores data, think of state
// reducer : --> function that is used to update store
// state :  --> old state/state before update
// action: ---> what happened/what update
// return updated or old state

Keep in mind, of course, when we are going to be setting up our application, we will use the special
library for that to connect our Redux store to our application. And the library name is React Redux.
//----------------------------

*/

/*


import React from "react";
import { createStore } from "redux";

import Navbar from "./components/Navbar"; // components
import CartContainer from "./components/CartContainer";
import cartItems from "./cart-items"; // items

// reducer function
const reducer = (state, action) => {
  console.log({ state, action });
  return state;
};

// initial store
const initialStore = {
  count: 88,
};

const store = createStore(reducer, initialStore);
console.log(store.getState());

const App = function () {
  // cart setup
  return (
    <main>
      <Navbar cart={store.getState()} />
      <CartContainer cart={cartItems} />
    </main>
  );
};

export default App;

*/

//------------------------------------
// LECTURE 379
//            REDUX -----> First Action
//-------------------------------------
/*


//----------------------------
// Redux stuff
// dispatch method - send actions to the store
// actions (object) - MUST HAVE TYPE PROPERTY - what kind of action
// DON'T MUTATE THE STATE - redux built on IMMUTABILITY (copy)
//----------------------------

import React from "react";
import { createStore } from "redux";

import Navbar from "./components/Navbar"; // components
import CartContainer from "./components/CartContainer";
import cartItems from "./cart-items"; // items

// reducer function
const reducer = (state, action) => {
  console.log({ state, action });
  if (action.type === "DECREASE_COUNT") {
    return { count: state.count - 1 };
  }
  return state;
};

// initial store
const initialStore = {
  count: 78,
};

// store
const store = createStore(reducer, initialStore);
store.dispatch({ type: "DECREASE_COUNT" });
console.log(store.getState());

const App = function () {
  // cart setup
  return (
    <main>
      <Navbar cart={store.getState()} />
      <CartContainer cart={cartItems} />
    </main>
  );
};

export default App;

*/

//------------------------------------
// LECTURE 380
//            REDUX -----> Return and Action BUG
//-------------------------------------

/*

import React from "react";
import { createStore } from "redux";

import Navbar from "./components/Navbar"; // components
import CartContainer from "./components/CartContainer";
import cartItems from "./cart-items"; // items

// reducer function
const reducer = (state, action) => {
  console.log({ state, action });
  if (action.type === "DECREASE_COUNT") {
    return { count: state.count - 1 };
  }
  return "Wubba lubba dub dub";
};

// initial store
const initialStore = {
  count: 78,
};

// store
const store = createStore(reducer, initialStore);
store.dispatch({ type: "DECREASE_COUNT" });
console.log(store.getState());

const App = function () {
  // cart setup
  return (
    <main>
      <Navbar cart={store.getState()} />
      <CartContainer cart={cartItems} />
    </main>
  );
};

export default App;

*/

//------------------------------------
// LECTURE 381
//            REDUX -----> MORE ACTIONS
//-------------------------------------

/*

import React from "react";
import { createStore } from "redux";

import Navbar from "./components/Navbar"; // components
import CartContainer from "./components/CartContainer";
import cartItems from "./cart-items"; // items

// reducer function
const reducer = (state, action) => {
  console.log({ state, action });
  if (action.type === "DECREASE_COUNT") {
    return { count: state.count - 1 };
  }
  if (action.type === "INCREASE_COUNT") {
    return { count: state.count + 1 };
  }
  if (action.type === "RESET") {
    return { count: 0 };
  }
  return state;
};

// initial store
const initialStore = {
  count: 0,
};

// store
const store = createStore(reducer, initialStore);
store.dispatch({ type: "DECREASE_COUNT" });
store.dispatch({ type: "RANDOM" });
store.dispatch({ type: "RESET" });
store.dispatch({ type: "INCREASE_COUNT" });
store.dispatch({ type: "INCREASE_COUNT" });
console.log(store.getState());

const App = function () {
  // cart setup
  return (
    <main>
      <Navbar cart={store.getState()} />
      <CartContainer cart={cartItems} />
    </main>
  );
};

export default App;

*/

//-----------------------------------------------
// LECTURE 382
//            REDUX -----> MORE COMPLICATED STATE
//-----------------------------------------------

/*

import React from "react";
import { createStore } from "redux";

import Navbar from "./components/Navbar"; // components
import CartContainer from "./components/CartContainer";
import cartItems from "./cart-items"; // items

// reducer function
const reducer = (state, action) => {
  console.log({ state, action });
  if (action.type === "DECREASE_COUNT") {
    return { ...state, count: state.count - 1, name: "summer" };
  }
  if (action.type === "INCREASE_COUNT") {
    return { ...state, count: state.count + 1 };
  }
  if (action.type === "RESET") {
    return { ...state, count: 0 };
  }
  if (action.type === "CHANGE_NAME") {
    return { ...state, name: "morty" };
  }
  return state;
};

// initial store
const initialStore = {
  count: 0,
  name: "rick",
};

// store
const store = createStore(reducer, initialStore);

store.dispatch({ type: "DECREASE_COUNT" });
store.dispatch({ type: "CHANGE_NAME" });
store.dispatch({ type: "RESET" });
store.dispatch({ type: "INCREASE_COUNT" });
store.dispatch({ type: "INCREASE_COUNT" });
console.log(store.getState());

const App = function () {
  // cart setup
  return (
    <main>
      <Navbar cart={store.getState()} />
      <CartContainer cart={cartItems} />
    </main>
  );
};

export default App;

*/

//-----------------------------------------------
// LECTURE 383
//            REDUX -----> ACTIONS AS VARIABLES
//-----------------------------------------------
/*


import React from "react";
import Navbar from "./components/Navbar"; // components
import CartContainer from "./components/CartContainer";
import cartItems from "./cart-items"; // items

// redux stuff
import { createStore } from "redux";
import {
  INCREASE,
  DECREASE,
  REMOVE,
  CLEAR_CART,
  GET_TOTAL,
  GET_AMOUNT,
} from "./actions";

// reducer function
const reducer = (state, action) => {
  console.log({ state, action });
  if (action.type === DECREASE) {
    return { ...state, count: state.count - 1, name: "summer" };
  }
  if (action.type === INCREASE) {
    return { ...state, count: state.count + 1 };
  }

  return state;
};

// initial store
const initialStore = {
  count: 0,
  name: "rick",
};

// store
const store = createStore(reducer, initialStore);

store.dispatch({ type: DECREASE });
store.dispatch({ type: INCREASE });
store.dispatch({ type: INCREASE });
store.dispatch({ type: INCREASE });
store.dispatch({ type: INCREASE });

console.log(store.getState());

const App = function () {
  // cart setup
  return (
    <main>
      <Navbar cart={store.getState()} />
      <CartContainer cart={cartItems} />
    </main>
  );
};

export default App;

*/

//-----------------------------------------------
// LECTURE 384
//            REDUX -----> SEPARATE REDUCER
//-----------------------------------------------

/*


import React from "react";
import Navbar from "./components/Navbar"; // components
import CartContainer from "./components/CartContainer";
import cartItems from "./cart-items"; // items

// redux stuff
import { createStore } from "redux";
import { INCREASE, DECREASE } from "./actions";
import reducer from "./reducer";

// initial store
const initialStore = {
  count: 0,
  name: "rick",
};

// store
const store = createStore(reducer, initialStore);

store.dispatch({ type: DECREASE });
store.dispatch({ type: INCREASE });
store.dispatch({ type: INCREASE });
store.dispatch({ type: INCREASE });
store.dispatch({ type: INCREASE });

console.log(store.getState());

const App = function () {
  // cart setup
  return (
    <main>
      <Navbar cart={store.getState()} />
      <CartContainer cart={cartItems} />
    </main>
  );
};

export default App;

*/
//---------------------------------------------------------------------------
//-----------------------------------------------
//   LECTURE 385 - 402
//            REDUX -----> REFACTOR -Redux Dev Tools
//----------------------------------------------------------------------------

/*

react- redux --> Provider - wraps Application, Connect - used in components

"connect" has an intersting syntax, because its a HOC, or Higher Order Component: It means that it returns a component itself

"connect()" has few arguments, but the most commonly used are the first two -->

connect(mapStateToProps, mapDispatchToProps)

Here in our navbar, we are not going to use "mapDispatchToProps" as there is no functionality in the navbar, so we will only use only the first function "mapStateToProps".

Whats Cool about "mapStateToProps", is that Not only we can map our state values to our props, but also automatically we map our dispatch function to a dispatch prop

Payload is what is keyed ( the key value pairs ) in your actions and passed around between reducers in your redux application. For example - const someAction = { type: "Test", payload: {user: "Test User", age: 25}, } This is a generally accepted convention to have a type and a payload for an action.

------> What is the use of ownProps in mapStateToProps?
ownProps (optional)​

You may define the function with a second argument, ownProps , if your component needs the data from its own props to retrieve data from the store. This argument will contain all of the props given to the wrapper component that was generated by connect .
*/

import React from "react";
import Navbar from "./components/Navbar"; // components
import CartContainer from "./components/CartContainer";
import cartItems from "./cart-items"; // items

// redux stuff
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducer";

// initial store
const initialStore = {
  cart: cartItems,
  total: 107,
  amount: 5,
};

// store/Global State
const store = createStore(reducer, initialStore);

const App = function () {
  // cart setup
  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer />
    </Provider>
  );
};

export default App;
