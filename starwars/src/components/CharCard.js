import React from 'react';
import { Card } from "semantic-ui-react"

const CharCard = (props) => {

    // console.log(props)
    return (
        <div className='card'>
        <Card>
        <Card.Content>
          <Card.Header>{props.char.name}</Card.Header>
          <Card.Meta>
            <span className="birth">
              Birth Year: {props.char.birth_year}
            </span>
          </Card.Meta>
          <Card.Content extra>
            <p>Height: {props.char.height}</p>
            <p>Mass: {props.char.mass}</p>
            <p>Hair Color: {props.char.hair_color}</p>
            <p>Skin Color: {props.char.skin_color}</p>
            <p>Eye Color: {props.char.eye_color}</p>
            <p>Gender: {props.char.gender}</p>
          </Card.Content>
        </Card.Content>
      </Card>
      </div>
    )
}

export default CharCard;