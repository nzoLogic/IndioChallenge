import React from 'react'
import { Form, TextArea, Segment } from 'semantic-ui-react'
import { exportStorage } from './Local.js'

const Export = (props) => {
  const data = exportStorage()
  return(
    <Segment fluid>
    <Form>
      <Form.Field fluid control={TextArea} value={data} />
      </Form>
    </Segment>
  )
}

export default Export