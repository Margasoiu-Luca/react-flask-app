import React from 'react'
import { Button, Checkbox, Form,Message,Icon, Segment,List, Rating, Header  } from 'semantic-ui-react'

export default function Review(props) {
    console.log(props.data.rating)
    const r=parseInt(props.data.rating)
    return (
        <Segment style={{color:"black"}}>
            <List>
                <List.Header>From {props.data.user_name} <Rating rating={r} maxRating={5} disabled />
                <Header as='h1'> {props.data.text}</Header>
                </List.Header>
                <List.Item></List.Item>
            </List>
        </Segment>
    )
}
