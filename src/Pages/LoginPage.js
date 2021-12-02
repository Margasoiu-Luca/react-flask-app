import React,{useState, useRef} from 'react'
import { Button, Checkbox, Form,Message,Icon, Segment } from 'semantic-ui-react'
import {useLocation} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'

function LoginForm(){
 const [state, setstate] = useState({username:"",password:""})
 let navigate = useNavigate()
 //These refs are bascially pointers that link to jsx/react elements
 //In this page, they link to the pwassword input and the username input
 const passwordRef= useRef()
 const usernameRef= useRef()

 //If the token already exists, go to the landing page
 if(localStorage.getItem('token')){
   navigate('/')
 }
 

 async function handleclick(event){
   //Description of the http request on the api
   //For this specific method, the request is a POST which attempts to log in a user
   //If it is sucessfull, it returns a token and stores it as a localstorage item
   //If not alerts the user it was not sucessful
  const url = `http://localhost:5000/api/login`
  const options = {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body:JSON.stringify({"user":usernameRef.current.value,"password":passwordRef.current.value})
      //     'Authorization': localStorage.getItem('authorization')
    }
    let query = await fetch(url,options)
    console.log(query.status)
    if(query.status!=200){
      alert("Incorrect credentials")
    }
    else{
      query = await query.json()
      localStorage.setItem('token', query.token);
      localStorage.setItem('movieUser',usernameRef.current.value);
      alert("Sucessfully logged in")
      //There is a bug known at the moment where this navigate would not actually redirect to the '/' page
      navigate('/')  
            
 }
}
  return(
    <div>
    <Segment compact>Login page</Segment>
      <Form>
        <Form.Field>
          <label >Username</label>
          <input ref={usernameRef} placeholder='First Name' />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input ref={passwordRef} type="password" placeholder='Password' />
        </Form.Field>
        {/* This onclick callback handles the functionality of the page */}
        <Button onClick={handleclick} type='submit'>Submit</Button>
      </Form>
    <Message attached='bottom' warning>
      <Icon name='help' />
      Don't Have an account?&nbsp;<a href='/register'>Sign up here</a>&nbsp;instead.
    </Message>
    </div>
  )
}

export default LoginForm