import React from 'react'
import { Menu } from 'semantic-ui-react'

const TabMenu = (props) => {
  const { activeItem } = props
  return(
      <div>
        <Menu pointing secondary color='blue'>
          <Menu.Item
            name='Create'
            active={activeItem === 'Create'}
            onClick={props.handleTabClick}
            />

          <Menu.Item
            name='Preview'
            active={activeItem === 'Preview'}
            onClick={props.handleTabClick}
          />

          <Menu.Item
            name='Export'
            active={activeItem === 'Export'}
            onClick={props.handleTabClick}
          />
        </Menu>
      </div>
  )
}

export default TabMenu