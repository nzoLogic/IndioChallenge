import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'


class TabMenu extends Component{
  constructor(props){
    super(props)
    this.state = {
      activeItem: 'Create'
    }
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
  renderQuestions = ( activeItem ) => this.displays[activeItem]

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu>
          <Menu.Item
            name='Create'
            active={activeItem === 'Create'}
            onClick={this.handleItemClick}
            />

          <Menu.Item
            name='Preview'
            active={activeItem === 'Preview'}
            onClick={this.handleItemClick}
          />

          <Menu.Item
            name='Export'
            active={activeItem === 'Export'}
            onClick={this.handleItemClick}
          />
        </Menu>
      </div>
    )
  }
}

export default TabMenu