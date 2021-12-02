import React from 'react'
import { Dimmer, Loader} from 'semantic-ui-react'

//This component returns a loader from semantic-ui-react
//It is used with asynchronous parts of the code for it to be shown while the asynchronous 
//Parts of the code load

export default function Tloader() {
    return (
        <Dimmer style={{backgroundColor:'#45cbb2'}} active>
          <Loader>Loading</Loader>
        </Dimmer>
    )
}
