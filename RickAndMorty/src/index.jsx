import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './AppRouter'; // Importa el archivo de enrutamiento

ReactDOM.render(
    <React.StrictMode>
        <AppRouter /> {/* Utiliza el componente de enrutamiento */}
    </React.StrictMode>,
    document.getElementById('root')
);