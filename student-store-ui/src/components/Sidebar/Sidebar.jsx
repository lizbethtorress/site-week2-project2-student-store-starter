import React from "react";
import "./Sidebar.css";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import { useState } from "react";

// export default function Sidebar({
//   shoppingCart,
//   products,
//   checkoutForm,
//   handleOnCheckoutFormChange,
//   handleOnSubmitCheckoutForm,
// }) {
//   const [isOpen, setIsOpen] = useState(false);
//   const handleOnToggle = () => {
//     setIsOpen(!isOpen);
//   };
//   console.log(shoppingCart)
//   return (
//     <section className={`sidebar ${isOpen ? "open" : "closed"}`}>
//       {isOpen && (
//         <>
//           <button className="toggle-button" onClick={handleOnToggle}>
//             Close
//           </button>
//           <ShoppingCart shoppingCart={shoppingCart} products={products} />
//           <CheckoutForm
//             isOpen={isOpen}
//             shoppingCart={shoppingCart}
//             checkoutForm={checkoutForm}
//             handleOnCheckoutFormChange={handleOnCheckoutFormChange}
//             handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm}
//           />
//         </>
//       )}
//       {!isOpen && (
//         <button className="toggle-button" onClick={handleOnToggle}>
//           Open
//         </button>
//       )}
//     </section>
//   );
// }
export default function Sidebar({
  shoppingCart,
  products,
  checkoutForm,
  handleOnCheckoutFormChange,
  handleOnSubmitCheckoutForm,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const handleOnToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className={`sidebar ${isOpen ? "open" : "closed"}`}>
      {isOpen && (
        <>
          <button className="toggle-button" onClick={handleOnToggle}>
            Close
          </button>
          <div className="sidebar-content">
            <ShoppingCart shoppingCart={shoppingCart} products={products} />
            <CheckoutForm
              isOpen={isOpen}
              shoppingCart={shoppingCart}
              checkoutForm={checkoutForm}
              handleOnCheckoutFormChange={handleOnCheckoutFormChange}
              handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm}
            />
          </div>
        </>
      )}
      {!isOpen && (
        <button className="toggle-button" onClick={handleOnToggle}>
          Open
        </button>
      )}
    </section>
  );
}