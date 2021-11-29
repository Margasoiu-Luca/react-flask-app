import React,{useState,useRef} from 'react'
import { Grid,Segment,Image, List,Message,Button,Header } from 'semantic-ui-react'

export default function PersonalPage() {
    const [state, setState] = useState([{hiddenMessage:true}])
    let hiddenButton= useRef()
    function changeHidden(){
        console.log(hiddenButton)
        // hiddenButton.current.props.hidden=false
        setState([{hiddenMessage:false}])
    }
    return (
        <List divided>
            <List.Item>
                <Header textAlign='center' as='h1'>guy's account</Header>
            </List.Item>
            <List.Item>
                <Segment compact color='yellow' inverted>
                    <Button onClick={changeHidden}>Delete your account  </Button>
                </Segment>
                <Message ref={hiddenButton} hidden={state[0].hiddenMessage} compact attached='bottom' color='red'>Are you sure you want to do this? This is permanent! <Button>Yes</Button></Message>
            </List.Item>
        </List>
    )
}

