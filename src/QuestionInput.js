import React from 'react'
import { Form, Input } from 'semantic-ui-react'

const QuestionInput = (props) => {
  return(
    <Form.Field inline control={Input} label='Question' name='question' type={props.type} placeholder='question' value={props.value} onChange={props.onChange}/>
    
  )
}

export default QuestionInput