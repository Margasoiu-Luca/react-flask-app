import React,{useState, useRef} from 'react'
import { Button, Checkbox, Form,Message,Icon, Segment } from 'semantic-ui-react'
import {useLocation} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'

function LoginForm(){
 const [state, setstate] = useState({username:"",password:""})
 let navigate = useNavigate()
 const passwordRef= useRef()
 const usernameRef= useRef()

 if(localStorage.getItem('token')){
   navigate('/')
 }
 

 async function handleclick(event){
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