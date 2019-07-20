import React, { useState, useEffect } from 'react';
import CharCard from './CharCard.js';
import axios from 'axios';

const CharGrid = () => {
    const [charData, setCharData] = useState([]);

    useEffect( () => {
        axios
            .get('https://swapi.co/api/people/')
            // ?page=1

            .then(res => {
                // console.log(res.data.results)
                setCharData(res.data.results)
                
            })

            .catch(err => {
                console.log('Oopsie!', err)
            })
    }, [])
    console.log('Set Char Data', charData)
    return (
        <div className='char-grid'>
            
                { charData.map(char => {
                    return <CharCard key={ char.name } char={ char } />;
                })}
        </div>
    )
}

export default CharGrid;