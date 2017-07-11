import React from 'react'
import { Form, Input, Select } from 'semantic-ui-react'
import { numberOptions, equalsConditions, yesNoOptions } from './Options.js'

const whichCondition = (type) => {
  if(type === 'number') return numberOptions
  return equalsConditions
}

const ConditionInput = (props) => {
  const options = props.type === 'number' ? numberOptions : equalsConditions

  return(
    <Form.Field inline selection control={Select} name='condition' label='Condition' options={options} value={props.value} onChange={props.onChange} />
  )
}


export default ConditionInput