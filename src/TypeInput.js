import React from 'react'
import { Form, Select } from 'semantic-ui-react'

const typeOptions = [
  {key: 'yn', name: 'yn', text: 'Yes/No', value: 'yn'},
  {key: 'text', name: 'text', text: 'Text', value: 'text'},
  {key: 'number', name: 'number', text: 'Number', value: 'number'}
]

const TypeInput = (props) => {
  return(
    <Form.Field inline control={Select} label='Type' name='type' options={typeOptions} defaultValue={props.type} placeholder='select type' onChange={props.onChange}/>
  )
}

export default TypeInput