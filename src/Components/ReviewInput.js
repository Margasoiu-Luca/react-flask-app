import React from 'react'
import { Grid,Segment,TextArea, Form,Header} from 'semantic-ui-react'

export default function ReviewInput() {
    return (
        <Form style={{width:"100%",fontSize:'20px'}}>
        <Segment compact style={{color:'black'}}>Leave a review!</Segment>
        <TextArea style={{ minHeight:200 }} placeholder='Tell us what you think about this movie' />
      </Form>
    )
}
