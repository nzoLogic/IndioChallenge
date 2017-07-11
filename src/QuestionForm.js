import React, { Component } from 'react'
import { Form, Segment } from 'semantic-ui-react'
import Question from './Question.js'

class QuestionForm extends Component {
  constructor(props){
    super(props)
  }
  
  setQuestions = (question, i) => {
    return(
      <Question key={i} path={`[${i}]`} question={question} updateQuestions={this.props.updateQuestions} deleteQuestion={this.props.deleteQuestion} marginLeft={0}  />
    )
  }
  render(){
    const { questions } = this.props 
    return(
      <Form>
          { questions.map( this.setQuestions ) }
      </Form>
    )
  }
  
}
export default QuestionForm