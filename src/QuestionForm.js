import React, { Component } from 'react'
import { Form, Input, Container } from 'semantic-ui-react'
import QuestionInput from './QuestionInput.js'

const QuestionForm = (props) => {
  const questions = [{ q: 'What would you like?', type: 'text', subQ: null}]
  return(
    <Container>
    <Form>
      {questions.map( (q, i) => <QuestionInput key={i} question={q} /> )}
    </Form>
    </Container>
  )
}
export default QuestionForm