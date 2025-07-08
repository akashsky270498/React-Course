import "./index.css";
import App from "./App.jsx";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Home from "./components/Home.jsx";
// import About from "./components/About.jsx";
// import Contact from "./components/Contact.jsx";
import { lazy } from "react";

// const About = lazy(() => import("./components/About.jsx"))
const About = lazy(() =>
  wait(1000).then(() => import("./components/About.jsx"))
);

const Contact = lazy(() =>
  wait(1000).then(() =>
    import("./components/Contact.jsx").then((module) => {
      return { default: module.Contact };
    })
  )
);

const Home = lazy(() => wait(1000).then(() => import("./components/Home.jsx")));

const wait = (time) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
