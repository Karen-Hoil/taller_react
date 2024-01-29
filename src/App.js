// App.js
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './components/Login';
import './App.css';

function App() {
  const router = createBrowserRouter([
    {
      path: "/", // Ruta para el login
      element: <Login />,
    },
    {
     
    },
    // Agrega aquí más rutas según sea necesario
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
