
import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Inicio from './page/inicio';
import Login from './page/login';
import Registro from './page/registro';
import CrearTrabajo from './page/crearTrabajo';
import Detalles from './page/detalles';
import Reparacion from './page/reparacion';
import Revision from './page/revision';
import './css/navar.css';
import './css/cardAdmin.css';
import './css/crear.css';
import Admin from './page/admin';

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element: <Login/>
    },
    {
      path: "/registro",
      element: <Registro/>
    },
    {
      path: "/inicio",
      element: <Inicio/>
    },
    {
      path: "/crear",
      element: <CrearTrabajo/>
    },
    {
      path: "/detalles/:id_trabajo",
      element: <Detalles/>
    },
    {
      path: "/reparacion",
      element: <Reparacion/>
    },
    {
      path: "/revision",
      element: <Revision/>
    },
    {
      path: "/admin",
      element: <Admin/>
    }
    
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
