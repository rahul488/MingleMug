import { createBrowserRouter } from "react-router-dom";
import Index from "./Pages/Home/Index";
import Home from "./Pages/Home/Home";
import MenuLayout from "./Pages/Menu/MenuLayout";
import Product from "./Pages/Menu/Products/Product";
import Menu from "./Pages/Menu/Menu";
import Cart from "./Pages/Cart/Cart";
import Reservation from "./Pages/BookTable/Reservation";
import Events from "./Pages/Events/Events";
import About from "./Pages/About/About";
import NotFound from "./Pages/NotFound/Notfound";

const routes = [
    {
      index: true,
      element: <Home />,
    },
    {
      path: "menu",
      element: <MenuLayout />,
      children: [
        {
          index: true,
          element: <Menu />,
        },
        {
          path: ":type",
          element: <Product />,
        },
      ],
    },
    {
      path: "events",
      element: <Events />,
    },
    {
      path: "book-table",
      element: <Reservation />,
    },
    {
      path: "cart",
      element: <Cart />,
    },
    {
      path: "about",
      element: <About />,
    },
  ]
export const router = createBrowserRouter([
  {
    path: '/',
    element: <Index />,
    children: routes,
    errorElement: <NotFound />
  }
]);

