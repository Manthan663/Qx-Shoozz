import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Router.jsx";
import { CartProvider } from "./utils/CartContext.jsx";
import reportWebVitals from "./reportWebVitals.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </StrictMode>,
);

reportWebVitals((metric) => {
  console.log(metric);
});
