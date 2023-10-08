import React, { useState, useEffect } from "react";
import Character from "./Character";
import axios from 'axios';

function NavPage(props) {
    const isPrevButtonDisabled = props.page === 1;
    const isNextButtonDisabled = props.page >= 42;

    const handlePrevClick = () => {
        if (!isPrevButtonDisabled) {
            props.setPage(props.page - 1);
        }
    };

    const handleNextClick = () => {
        if (!isNextButtonDisabled) {
            props.setPage(props.page + 1);
        }
    };
    return (
        <header className="d-flex justify-content-between align-items-center">
            <button
                className="btn btn-secondary btn-sm"
                onClick={handlePrevClick}
                disabled={isPrevButtonDisabled}
            >
                Page {props.page - 1}
            </button>
            <p>Page: {props.page}</p>
            <button
                className="btn btn-primary btn-sm"
                onClick={handleNextClick}
                disabled={isNextButtonDisabled}
            >
                Page {props.page + 1}
            </button>
        </header>
    );
}

function CharacterList() {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);

    useEffect(() => {
        const fetchData = () => {
            axios
                .get(`https://rickandmortyapi.com/api/character?page=${page}`)
                .then(response => {
                    setCharacters(response.data.results);
                    setLoading(false);
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        };

        fetchData();
    }, [page]);

    return (
        <div className="container">
            <NavPage page={page} setPage={setPage} />

            {loading ? (
                <h1>Loading ...</h1>
            ) : (
                <div className="row">
                    {characters.map(character => (
                        <div className="col-md-4" key={character.id}>
                            <Character character={character} />
                        </div>
                    ))}
                </div>
            )}

            <NavPage page={page} setPage={setPage} />
        </div>
    );
}

export default CharacterList;
