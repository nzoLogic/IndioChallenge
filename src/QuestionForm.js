import React, { Component } from 'react'
import { Form, Segment } from 'semantic-ui-react'
import QuestionInput from './QuestionInput.js'
import { updateState } from './Local.js'
import QuestionNode from './Questions.js'
class QuestionForm extends Component {
  constructor(props){
    super(props)
    this.state = props
  }
  
  setQuestions = (question, i) => {
    question['subQ'].push(QuestionNode({isSub:true}))
    return(
      <QuestionInput key={i} question={question} children={question.subQ} />
    )
  }
  render(){
    const { questions } = this.props
    return(
      <Form>
        <Segment>
          {questions.map( this.setQuestions )}
        </Segment>
      </Form>
    )
  }
  
}
export default QuestionForm