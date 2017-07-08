import React, { Component } from 'react'
import { Form, Input, Container, Card } from 'semantic-ui-react'
import QuestionInput from './QuestionInput.js'
import { updateState } from './Local.js'

class QuestionForm extends Component {
  constructor(props){
    super(props)
    this.state = props
  }
  
  setQuestions = (question, i) => {
    return(
      <QuestionInput key={i} question={question}/>
    )
  }
  render(){
    const { questions } = this.props
    return(
      <Form>
        {questions.map( this.setQuestions )}
      </Form>
    )
  }
  
}
export default QuestionForm