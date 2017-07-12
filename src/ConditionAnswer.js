import React from 'react'
import { Form, Input, Select } from 'semantic-ui-react'
import { yesNoOptions } from './Options.js'

const ConditionAnswer = (props) => {
  return props.type === 'yn' ? select(props) : input(props)
}

const select = (props) => {
  console.log('select props: ', props)
  return(
    <Form.Field inline required
    control={Select} options={yesNoOptions} value={props.value} 
   placeholder='answer' onChange={props.onChange} 
    />
  )
}

const input = (props) => {
  const type = props.type === 'number' ? 'number' : 'text'
  console.log(props.type, type)
  return(
    <Input required type={type} name='value' value={props.value} placeholder='answer' onChange={props.onChange} />
  )
}

export default ConditionAnswer