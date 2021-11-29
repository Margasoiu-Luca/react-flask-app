import React from 'react'
import { Button, Checkbox, Form,Message,Icon, Segment,List, Rating  } from 'semantic-ui-react'

export default function Review(props) {
    return (
        <Segment>
            <List>
                <List.Header>From uuser1 <Rating defaultRating={3} maxRating={5} disabled /></List.Header>
                <List.Item>orem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a turpis dapibus, mollis diam non, lobortis nisl. Sed eget tellus faucibus, dictum neque at, interdum nunc. Mauris sed dolor vel ante facilisis efficitur. Phasellus vitae fermentum dolor. Cras cursus elit tortor, quis egestas massa fringilla et. Duis eget dictum ligula. Donec blandit luctus augue ac blandit. Mauris scelerisque lobortis bibendum. Sed facilisis ligula aliquam, facilisis metus id, consectetur massa. Sed congue iaculis sollicitudin.

Nulla lacinia magna a interdum pretium. Morbi ullamcorper scelerisque dolor, sed hendrerit justo suscipit sit amet. Nam porta tincidunt finibus. Cras lorem metus, vulputate sed quam sit amet, bibendum commodo quam. Ut id sapien pretium augue maximus tincidunt et nec felis. Donec finibus efficitur sapien, eget tempus erat aliquet et. Sed ac n</List.Item>
            </List>
        </Segment>
    )
}
