import React, { Component } from 'react'
import { Menu,Dropdown,Icon } from 'semantic-ui-react'
import SearchBar from './SearchBar'

export default class Navbar extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu style={{backgroundColor:'#45cbb2'}}  color="yellow" stackable>
        <Menu.Item href="/">
            Bestwatch
        </Menu.Item>

        <Menu.Item 
          active={activeItem === 'features'}>
          <Dropdown text='Movies'>  
            <Dropdown.Menu> 
              <Dropdown.Item text='By Category' style={{backgroundColor:'#45cbb2'}} as='a' href='/category'/>
            </Dropdown.Menu> 
          </Dropdown>
        </Menu.Item>
        <Menu.Item>
          <SearchBar></SearchBar>
        </Menu.Item>

        <Menu.Item position='right'
          name='User'
          active={activeItem === 'sign-in'}
          onClick={this.handleItemClick}
          href='/personal'
        >
          User
          <Icon name='user'/>
        </Menu.Item>
      </Menu>
    )
  }
}
