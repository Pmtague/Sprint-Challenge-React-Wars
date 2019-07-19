import React, { useState, useEffect } from 'react';
import CharCard from './CharCard.js';
import axios from 'axios';
import 'semantic-ui-css/semantic.min.css';
import { Card} from 'semantic-ui-react';

const CharGrid = () => {
    const [charData, setCharData] = useState([]);

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
        <div className='char-grid'>
            <Card.Group>
                { charData.map(char => {
                    return <CharCard char={ char }/>;
                })}
            </Card.Group>
        </div>
    )
}

export default CharGrid;