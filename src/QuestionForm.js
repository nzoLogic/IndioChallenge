import React, { Component } from 'react'
import { Form, Segment } from 'semantic-ui-react'
import Question from './Question.js'
import { updateQuestionState } from './Local.js'
import QuestionNode from './QuestionNode.js'

class QuestionForm extends Component {
  constructor(props){
    super(props)
    this.state = props
    this.updateParent = this.updateParent.bind(this)
  }

  
  updateParent = (key, prop) => {
    let questions = {...this.state.questions }
    console.log(key)
    questions[key] = prop
    this.setState({questions: questions})
  }
  setQuestions(question, i){
    return(
      <Question key={i} question={question} handleInputChange={this.handleInputChange}  />
    )
  }
  render(){
    const { questions } = this.state
    return(
      <Form>
        <Segment>
          { questions.map( (question, i) => {
            return(
              <Question key={i} question={question} handleInputChange={this.handleInputChange}  />
            )
          } ) }
        </Segment>
      </Form>
    )
  }
  
}
export default QuestionForm