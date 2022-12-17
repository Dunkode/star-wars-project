import { useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Films from "./pages/Films";
import './assets/css/estilos.css'
import Starships from "./pages/Starships";
import People from "./pages/People";
import Planets from "./pages/Planets";
import Species from "./pages/Species";
import Duvidas from "./pages/Duvidas";
import Sobre from "./pages/Sobre";

function App() {

  const [login, setLogin] = useState(false)

  const verificarLogin = () => {
    setLogin(sessionStorage.getItem("login"))
  }


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login verificarLogin={verificarLogin} />,
    },
    {
      path: "/home",
      element: login ? <Home /> : <Login verificarLogin={verificarLogin} />,
    },
    {
      path: "/films",
      element: login ? <Films /> : <Login verificarLogin={verificarLogin} />,
    },
    {
      path: "/starships",
      element: login ? <Starships /> : <Login verificarLogin={verificarLogin} />,
    },
    {
      path: "/people",
      element: login ? <People /> : <Login verificarLogin={verificarLogin} />,
    },
    {
      path: "/planets",
      element: login ? <Planets /> : <Login verificarLogin={verificarLogin} />,
    },
    {
      path: "/species",
      element: login ? <Species /> : <Login verificarLogin={verificarLogin} />,
    },
    {
      path: "/duvidas",
      element: login ? <Duvidas /> : <Login verificarLogin={verificarLogin} />,
    },
    {
      path: "/sobre",
      element: login ? <Sobre/> : <Login verificarLogin={verificarLogin} />,
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
