import React, { Component } from 'react'
import { Form, Input, Container, Card } from 'semantic-ui-react'
import QuestionInput from './QuestionInput.js'

class QuestionForm extends Component {
  constructor(props){
    super(props)
  }
  
  render(){
    const { questions } = this.props
    return(
      <Form>
        {questions.map( (q, i) => <QuestionInput key={i} question={q} /> )}
      </Form>
    )
  }
  
}
export default QuestionForm