import React from 'react';

const equipo = [
    {
        imagen: "../IMG/ALEXIS.PNG",
        nombre: 'ALEXIS',
        apellido: 'PONCE GONZALEZ',
        noControl: '20690137',
        email: '20690137@tecvalles.mx',
    },
    {
        imagen: "../IMG",
        nombre: 'ALEJANDRO',
        apellido: 'OLVERA DELGADO',
        noControl: 'Tu número de control',
        email: '20690137@tecvalles.mx',
    },
    // Agrega aquí los datos de otros integrantes del equipo
];

function About() {
    return (
        <div>
            <h1>Acerca de</h1>
            <h2>Materia Docente</h2>
            <p>Nombre de la Materia Docente: [Nombre de la Materia]</p>

            <h2>Integrantes del Equipo</h2>
            {equipo.map((integrante, index) => (
                <div className="integrante" key={index}>
                    <img className='img-fluid' src={integrante.imagen} alt={`${integrante.nombre} ${integrante.apellido}`} />
                    <h3>{integrante.nombre} {integrante.apellido}</h3>
                    <p>Número de Control: {integrante.noControl}</p>
                    <p>Email: {integrante.email}</p>
                </div>
            ))}
        </div>
    );
}

export default About;