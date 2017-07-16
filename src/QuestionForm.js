import React from 'react'
import { Form, Button } from 'semantic-ui-react'
import Question from './Question.js'


/* 
  Creates a stateless Form component based on the props passed down by App.state.questions 
  
  Passes methods for updating the root node, App, down to each Question child 
*/ 
const QuestionForm = (props) => {
  const { questions } = props 
  return(
    <div>
      <br></br>
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
  </div>
    )  
}
export default QuestionForm