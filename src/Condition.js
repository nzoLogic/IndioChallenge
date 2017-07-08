import React from 'react'
import { Form, Input, Select } from 'semantic-ui-react'
const conditionOptions = [
  {key: 'equals', name: 'equals', text: 'Equals' },
  {key: 'less', name: 'less', text: 'Less than' },
  {key: 'greater', name: 'greater', text: 'Greater than' }
]
const Condition = () => {
  return(
    <Form.Group inline>
      <Form.Field inline control={Select} label='Condition' name='type' options={conditionOptions} placeholder='select type'/>
      <Form.Field inline control={Input} placeholder='value'/>
    </Form.Group>
  )
}

export default Condition