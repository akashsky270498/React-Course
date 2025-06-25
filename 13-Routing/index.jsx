import { createRoot } from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./components/Contact";
// import Header from "./components/Header";
import Home from "./components/Home";
import Error from "./components/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contacts",
        // element: <div>Contact Page!</div>,
        element: <Contact />,
      },
    ],
  },
]);

const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router}></RouterProvider>);
// root.render(
//   <>
//     <Header />
//     <RouterProvider router={router}></RouterProvider>
//   </>
// );
