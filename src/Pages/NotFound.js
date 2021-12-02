import React from 'react'
import 'semantic-ui-css/semantic.min.css'


//No acutal functionality here
//Simply 
//This is NOT my code it is simply something I found online that would let me easily show the users that they are on the wrong page
export default function NotFound() {
    return (
        <div class="ui grid middle aligned segment inverted" style={{backgroundColor:'#45cbb2',height: '100%', margin: "0"}}>
            <div class="ui column center aligned">
                <div class="ui inverted statistic">
                <div class="value">404</div>
                <div class="label">Error</div>
            </div>

            <div class="ui message inverted">
                <div class="header">Description</div>
                <p>Not found</p>
            </div>
            </div>
        </div>
    )
}
