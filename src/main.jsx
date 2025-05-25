import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";  // ✅ Este sí lo usas
import { router } from "./routes";  // ✅ Aquí defines todas tus rutas
import './index.css';
import { StoreProvider } from './hooks/useGlobalReducer';  // (si lo necesitas)
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// Renderiza usando RouterProvider
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StoreProvider>
      <RouterProvider router={router} />
    </StoreProvider>
  </React.StrictMode>
);

