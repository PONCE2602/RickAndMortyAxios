import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './AppRouter'; // Importa el archivo de enrutamiento

ReactDOM.render(
  <React.StrictMode>
    <AppRouter /> {/* Utiliza el componente de enrutamiento */}
  </React.StrictMode>,
  document.getElementById('root')
);