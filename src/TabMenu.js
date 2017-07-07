import React, { Component } from 'react'
import { Menu, Button, Container } from 'semantic-ui-react'
import QuestionForm from './QuestionForm.js'


class TabMenu extends Component{
  constructor(props){
    super(props)
    this.state = {
      activeItem: 'Create',
      questions: props.questions
    }
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
  render() {
    const { activeItem } = this.state
    const { questions } = this.state
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
        <Container children={<QuestionForm questions={questions} />} />

        <Button primary onClick={this.props.addQuestion}>
          Add Input
        </Button>
      </div>
    )
  }
}

export default TabMenu