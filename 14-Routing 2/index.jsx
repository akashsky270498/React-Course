import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Home from "./components/Home";
import CountryDetails from "./components/CountryDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },

      {
        path: "/contact",
        element: <Contact />,
      },

      {
        path: "/country",
        element: <CountryDetails />,
      },
    ],
  },
  //   {
  //     path: "/",
  //     element: <App />,
  //   },

  //   {
  //     path: "/contact",
  //     element: <Contact />,
  //   },
]);

const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
