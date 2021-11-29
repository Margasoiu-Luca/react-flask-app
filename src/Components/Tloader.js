import React from 'react'
import { Dimmer, Loader} from 'semantic-ui-react'

export default function Tloader() {
    return (
        <Dimmer style={{backgroundColor:'#45cbb2'}} active>
          <Loader>Loading</Loader>
        </Dimmer>
    )
}
