import React from 'react'
import { Form, Input, Radio } from 'semantic-ui-react'

const PreviewQuestion = (props) => {
  const question = props.question
  const control = question.type === 'yn' ? Radio : Input
  console.log(props)
  return <Form.Field control={control} label={question.question} />
}

export default PreviewQuestion