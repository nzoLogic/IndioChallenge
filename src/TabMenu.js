import React, { Component } from 'react'
import { Menu, Button, Container } from 'semantic-ui-react'
import QuestionForm from './QuestionForm.js'
import { addQuestion } from './Local.js'


class TabMenu extends Component{
  constructor(props){
    super(props)
  }
  
  render() {
    const { activeItem } = this.props
    return (
      <div>
        <Menu>
          <Menu.Item
            name='Create'
            active={activeItem === 'Create'}
            onClick={this.props.handleTabClick}
            />

          <Menu.Item
            name='Preview'
            active={activeItem === 'Preview'}
            onClick={this.props.handleTabClick}
          />

          <Menu.Item
            name='Export'
            active={activeItem === 'Export'}
            onClick={this.props.handleTabClick}
          />
        </Menu>
      </div>
    )
  }
}

export default TabMenu