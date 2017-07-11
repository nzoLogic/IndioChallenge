import React from 'react'
import { Form, Input, Select, Message } from 'semantic-ui-react'
import { yesNoOptions } from './Options.js'

const ConditionAnswer = (props) => {
  return props.type === 'yn' ? select(props) : input(props)
}

const select = (props) => {
  console.log('select props: ', props)
  return(
    <Form.Field inline
    control={Select} options={yesNoOptions} value={props.value} 
   placeholder='answer' onChange={props.onChange} 
    />
  )
}

const input = (props) => {
  const type = props.parentType === 'number' ? 'number' : 'text'
  return(
    <Form.Field inline required type={type} control={Input} name='value' value={props.value} placeholder='answer' onChange={props.onChange} />
  )
}

export default ConditionAnswer