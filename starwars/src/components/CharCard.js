import React from 'react';
import { Card } from "semantic-ui-react"

const CharCard = ({ char }) => {

    return (
        <Card>
            <Card.Content>
                <Card.Description>{ char }</Card.Description>
            </Card.Content>
        </Card>
    )
}

export default CharCard;