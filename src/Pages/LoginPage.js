import React,{useState, useRef} from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'

function LoginForm(){
 const [state, setstate] = useState({username:"",password:""})
 const passwordRef= useRef()
 const usernameRef= useRef()

 function handleclick(event){
  const url = `http://localhost:5000/api/v1/items/${usernameRef}}`
  const options = {
      method: 'get',
      headers: {
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem('authorization')
      }
  }
 }
  return(
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
  )
}

export default LoginForm