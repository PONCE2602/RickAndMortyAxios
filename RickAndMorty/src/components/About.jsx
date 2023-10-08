import React from 'react';

const cardStyle = {
    backgroundColor: '#383f46',
    color: 'white',
    marginBottom: '40px',
};

const equipo = [
    {
        imagen: "../IMG/XALLY.PNG",
        nombre: 'XALLY',
        apellido: 'MARTINEZ TREJO',
        noControl: '20690080',
        email: '20690080@tecvalles.mx',
    },
    {
        imagen: "../IMG/ALEXIS.PNG",
        nombre: 'ALEXIS',
        apellido: 'PONCE GONZALEZ',
        noControl: '20690137',
        email: '20690137@tecvalles.mx',
    },
    {
        imagen: "../IMG/ALEJANDRO.jpg",
        nombre: 'ALEJANDRO',
        apellido: 'OLVERA DELGADO',
        noControl: '19690395',
        email: '19690395@tecvalles.mx',
    },
    {
        imagen: "../IMG/DANIEL.jpg",
        nombre: 'DANIEL',
        apellido: 'CERVANTES VILLANUEVA',
        noControl: '20690146',
        email: '20690137@tecvalles.mx',
    },
    {
        imagen: "../IMG/ISRAEL.PNG",
        nombre: 'ISRAEL',
        apellido: 'ACUÑA VEGA',
        noControl: '20690087',
        email: '20690087@tecvalles.mx',
    },

    // Agrega aquí los datos de otros integrantes del equipo
];

function About() {
    return (
        <div>
            <h1>Acerca de</h1>
            <h3>DESARROLLO DE APLICACIONES WEB</h3>
            <h3>MSC. JAIME JESUS DELGADO MERAZ</h3>

            <h2>Integrantes del Equipo</h2>
            {equipo.map((integrante, index) => (
                <div className="text-center p-4 card card-body" style={cardStyle} key={index}>
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