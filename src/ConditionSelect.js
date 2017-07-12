import React from 'react'
import { Form, Select } from 'semantic-ui-react'
import { numberOptions, equalsConditions } from './Options.js'

const ConditionInput = (props) => {
  const options = props.type === 'number' ? numberOptions : equalsConditions

  return(
    <Form.Field inline selection control={Select} name='condition' label='Condition' options={options} value={props.value} onChange={props.onChange} />
  )
}


export default ConditionInput