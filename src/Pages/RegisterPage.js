import React,{useState, useRef} from 'react'
import { Button, Checkbox, Form,Message,Icon, Segment } from 'semantic-ui-react'
import {Redirect} from 'react-router-dom'

function RegisterPage(){
 const [state, setstate] = useState({username:"",password:""})
 const passwordRef= useRef()
 const usernameRef= useRef()

 async function handleclick(event){
  const url = `http://localhost:5000/api/createUser`
  const options = {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body:JSON.stringify({"user":usernameRef.current.value,"password":passwordRef.current.value})
      //     'Authorization': localStorage.getItem('authorization')
    }
    let query = await fetch(url,options)
    query = await query.json()
    console.log(query)
    if(query.successful){
        console.log("hello")
        alert("account created")}
            
    else{
        alert("Error, please try again")}
 }
  return(
    <div>
    <Segment compact>Sign Up page</Segment>
      <Form>
        <Form.Field>
          <label >Username</label>
          <input ref={usernameRef} placeholder='First Name' />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input ref={passwordRef} type="password" placeholder='Password' />
        </Form.Field>
        <Button onClick={handleclick} type='submit'>Submit</Button>
      </Form>
    <Message attached='bottom' warning>
      <Icon name='help' />
      Already have an account?&nbsp;<a href='/login'>Login here</a>&nbsp;instead.
    </Message>
    </div>
  )
}

export default RegisterPage