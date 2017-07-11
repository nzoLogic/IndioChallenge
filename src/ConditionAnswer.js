import React from 'react'
import { Form, Input, Select } from 'semantic-ui-react'
import { yesNoOptions } from './Options.js'

const ConditionAnswer = (props) => {
  console.log(props)
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
  return(
    <Form.Field inline control={Input} name='value' value={props.value} placeholder='answer' onChange={props.onChange} />
  )
}

export default ConditionAnswer