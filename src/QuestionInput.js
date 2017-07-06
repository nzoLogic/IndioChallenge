import React, { Component } from 'react'
import { Form, Input, Select, Button } from 'semantic-ui-react'

const typeOptions = [
  {key: 'yn', text: 'Yes/No', value: 'yn'},
  {key: 'text', text: 'Text', value: 'text'},
  {key: 'number', text: 'Number', value: 'number'}
]

class QuestionInput extends Component{
  constructor(props){
    super(props)
    this.state = props.question
  }
  addSubQuestion = (e) => {
    let { question } = this.state
    question.subQ = <QuestionInput />
    this.setState({question: question})
  }
  handleInputChange = (e) => {
    let name = this.state
    console.log(e, this)
  }

  
  render(){
    const question = this.state
    return(
      <Form.Field rows='3'>
        <Form.Input inline control={Input} label='Question' name='q' type={question.type} placeholder='question' value={ question.q } onChange={this.handleInputChange}/>
        <Form.Input inline control={Select} label='Type' name='type' options={typeOptions} placeholder='select type' onChange={this.handleInputChange}/>
        <Form.Group>
          <Button onClick={this.addSubQuestion}>Add Sub-Input</Button>
          <Button>Delete</Button>
        </Form.Group>
      </Form.Field>
    )
  }
  
}

export default QuestionInput