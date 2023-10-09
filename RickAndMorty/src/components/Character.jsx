function Character({ character }) {

    const cardStyle = {
        backgroundColor: '#383f46',
        color: 'white',
        marginBottom: '40px',
    };

    return (
        <div className="text-center p-4 card card-body border-secondary" style={cardStyle}>
            <h3>{character.name}</h3>
            <br />
            <img className="img-fluid rounded-pill border border-4 border-black" src={character.image} alt={character.name} />
            <br />
            <p>Univers: {character.origin.name}</p>
            <p>Status: {character.status}</p>
            <p>Specie: {character.species}</p>
            <p>Gender: {character.gender}</p>
            <p>Type: {character.type}</p>
        </div>
    )
}

export default Character