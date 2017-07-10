import React, { Component } from 'react'
import { Form, Segment } from 'semantic-ui-react'
import Question from './Question.js'
import { updateQuestionState } from './Local.js'
import QuestionNode from './QuestionNode.js'

class QuestionForm extends Component {
  constructor(props){
    super(props)
  }
  
  setQuestions = (question, i) => {
    return(
      <Question key={i} path={`[${i}]`} question={question} updateQuestions={this.props.updateQuestions} marginLeft={0}  />
    )
  }
  render(){
    const { questions } = this.props 
    return(
      <Form>
        <Segment>
          { questions.map( this.setQuestions ) }
        </Segment>
      </Form>
    )
  }
  
}
export default QuestionForm