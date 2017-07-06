import React, { Component } from 'react'
import { Form, Input } from 'semantic-ui-react'

const types = [
  {key: 'y', text: 'Yes / No', value: 'Y/N'},
  {key: 'n', text: 'Number', value: 'number'},
  {key: 't', text: 'Text', value: 'text'},
]
const Questions = ({q=null, type=null, subQ=null}) => {
  return {q, type, subQ}
}

export default Questions