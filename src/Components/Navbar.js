import React, { Component } from 'react'
import { Menu,Dropdown,Icon } from 'semantic-ui-react'
import SearchBar from './SearchBar'
import {useLocation, useNavigate, BrowserRouter } from "react-router-dom";








export default function Navbar() {
  const location = useLocation()
  const navigate = useNavigate()

  //On log out remove the localstorage token 
  function logOut(){
    localStorage.removeItem('token');
    console.log("hello")
    navigate('/login')
  }
  //Function that adds a sign out option if a user is logged in
  function signStatus(){
    console.log(location.pathname)
    if(localStorage.getItem('token') && location.pathname!=='/login'){
      return(<Menu.Item name='Sign Out' onClick={logOut} position='right'/>)
    }
    return
  } 
    return (
      <Menu style={{backgroundColor:'#45cbb2'}}  color="yellow" stackable>
        <Menu.Item href="/">
            Bestwatch
        </Menu.Item>

        <Menu.Item >
          <Dropdown text='Movies'>  
            <Dropdown.Menu> 
              <Dropdown.Item text='By Category' style={{backgroundColor:'#45cbb2'}} as='a' href='/category'/>
            </Dropdown.Menu> 
          </Dropdown>
        </Menu.Item>
        <Menu.Item>
          <SearchBar></SearchBar>
        </Menu.Item>
        {/* This function returns another Menu.Item with a Sign Out value and reference. If a user is not logged on this is not generated */}
        {signStatus()}

        <Menu.Item position='right'
          name='user'
          // if the localstorage user exists, then add that as a value otherwise simply add a generic 'user'
          href='/personal'>{localStorage.getItem('movieUser')?localStorage.getItem('movieUser'):'user'}
          <Icon name='user'/>
        </Menu.Item>
      </Menu>
    )
  }