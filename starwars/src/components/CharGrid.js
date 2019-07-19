import React, { useState, useEffect } from 'react';
import CharCard from './CharCard.js';
import axios from 'axios';

const CharGrid = () => {
    const [charData, setCharData] = useState();

    useEffect( () => {
        axios
            .get('https://swapi.co/api/people/?page=1')

            .then(res => {
                setCharData(res.data.results)
                console.log(res.data)
            })

            .catch(err => {
                console.log('Oopsie!', err)
            })
    }, [])

    return (
        <div>
            {/* { name } */}
        </div>
    )
}

export default CharGrid;