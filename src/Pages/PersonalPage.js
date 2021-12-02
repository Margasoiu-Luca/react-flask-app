import React,{useState,useRef} from 'react'
import { Grid,Segment,Image, List,Message,Button,Header } from 'semantic-ui-react'


//This component has no functionality with the 
//All that 
export default function PersonalPage() {
    //state only contains the hiddenMessage:true query param
    //this is used to show or to hide an alert when you attempt to delete your account
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
                <Header textAlign='center' as='h1'>{localStorage.getItem('movieUser')?`${localStorage.getItem('movieUser')}'s Account`:`Your account`}</Header>
            </List.Item>
            <List.Item>
                <Segment compact color='yellow' inverted>
                    {/* onclick it changes the state, which also forces the hidden message to show, as it's hidden prop is linked with the state */}
                    <Button onClick={changeHidden}>Delete your account  </Button>
                </Segment>
                <Message ref={hiddenButton} hidden={state[0].hiddenMessage} compact attached='bottom' color='red'>Are you sure you want to do this? This is permanent! <Button>Yes</Button></Message>
            </List.Item>
        </List>
    )
}

