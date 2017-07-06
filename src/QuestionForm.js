import React, { Component } from 'react'
import { Form, Input, Container } from 'semantic-ui-react'

const QuestionForm = (props) => {
  return(
    <Container>
    <Form>
      <Form.Field inline>
        <label>Question:</label>
        <Form.Input placeholder='Question' />
      </Form.Field>
    </Form>
    </Container>
  )
}
export default QuestionForm