import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import AddCoffee from "../pages/AddCoffee";
import UpdateCoffee from "../pages/UpdateCoffee";
import Login from "../pages/Login";
import SingUp from "../pages/SingUp";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("https://coffee-website-backend-g3lrok0zm-md-ronys-projects.vercel.app/coffees"),
      },
      {
        path: "/addCoffee",
        element: <AddCoffee />,
      },
      {
        path: "/updateCoffee/:id",
        element: <UpdateCoffee />,
        loader: ({ params }) =>
          fetch(`https://coffee-website-backend-g3lrok0zm-md-ronys-projects.vercel.app/coffees/${params.id}`),
      },
      {
        path:"/login",
        element: <Login/>
      },
      {
        path:"/singup",
        element: <SingUp/>
      }
    ],
  },
]);

export default Router;
