import React from 'react'
import { Form, Button } from 'semantic-ui-react'
import Question from './Question.js'

const QuestionForm = (props) => {
  const { questions } = props 
  return(
    <Form>
      { 
        questions.map((question, i) => {
          return(
            <Question key={i} path={`[${i}]`} question={question} updateQuestions={props.updateQuestions} deleteQuestion={props.deleteQuestion} marginLeft={0}  />
          )
        }) 
      }
      <Button primary onClick={props.addQuestion}>
              Add Input
      </Button>
    </Form>
    )  
}
export default QuestionForm