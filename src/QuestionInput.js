import React, { Component } from 'react'
import { Form, Input } from 'semantic-ui-react'

class QuestionInput extends Component{
  constructor(props){
    super(props)
    this.state = {
      question: this.props.question
    }
  }
  
  render(){
    const {question} = this.state
    console.log(question)
    return(
      <Form.Field>
        <label>Question:</label>
        <input type={question.type} placeholder='question' value={ question.q } />
      </Form.Field>
    )
  }
  
}

export default QuestionInput