// import React from "react";

// const Navbar = () => {
//   return (
//     <nav>
//       <div className="nav-center">
//         <h3>Redux Gear</h3>
//         <div className="nav-container">
//           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
//             <path d="M16 6v2h2l2 12H0L2 8h2V6a6 6 0 1 1 12 0zm-2 0a4 4 0 1 0-8 0v2h8V6zM4 10v2h2v-2H4zm10 0v2h2v-2h-2z" />
//           </svg>
//           <div className="amount-container">
//             <p className="total-amount">0</p>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

/*

//-----------------------------------------------------------------------------------

import React from "react";

const Navbar = ({ cart }) => {
  const { count } = cart;

  return (
    <nav>
      <div className="nav-center">
        <h3>Redux Gear</h3>
        <div className="nav-container">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M16 6v2h2l2 12H0L2 8h2V6a6 6 0 1 1 12 0zm-2 0a4 4 0 1 0-8 0v2h8V6zM4 10v2h2v-2H4zm10 0v2h2v-2h-2z" />
          </svg>

          <div className="amount-container">
            <p className="total-amount">{count}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


*/

//-----------------------------------------------
// LECTURE 385 - 402
//            REDUX -----> REFACTOR -Redux Dev Tools
//-----------------------------------------------
/*


"connect" has an intersting syntax, because its a HOC, or Higher Order Component: It means that it returns a component itself

"connect()" has few arguments, but the most commonly used are the first two -->

connect(mapStateToProps, mapDispatchToProps)

Here in our navbar, we are not going to use "mapDispatchToProps" as there is no functionality in the navbar, so we will only use only the first function "mapStateToProps".

Whats Cool about "mapStateToProps", is that Not only we can map our state values to our props, but also automatically we map our dispatch function to a dispatch prop

*/

import React from "react";
import { connect } from "react-redux";

const Navbar = ({ amount }) => {
  return (
    <nav>
      <div className="nav-center">
        <h3>Redux Gear</h3>
        <div className="nav-container">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M16 6v2h2l2 12H0L2 8h2V6a6 6 0 1 1 12 0zm-2 0a4 4 0 1 0-8 0v2h8V6zM4 10v2h2v-2H4zm10 0v2h2v-2h-2z" />
          </svg>

          <div className="amount-container">
            <p className="total-amount">{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = (store) => {
  const { amount } = store;
  return {
    amount: amount,
  };
};

export default connect(mapStateToProps)(Navbar);
