import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import Layout from "./Layout";

import WishlistPage from "./Pages/Wishlistpage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/wishlist",
        element: <WishlistPage />,
      },
    ],
  },
]);

export default router;


