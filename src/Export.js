import React from 'react'
import { Form, TextArea, Segment } from 'semantic-ui-react'
import { exportStorage } from './Local.js'

const Export = (props) => {
  const data = exportStorage() || "Start creating!"
  return(
    <Segment>
    <Form>
      <Form.Field style={{height: '80vh'}} control={TextArea}>
        { JSON.stringify(JSON.parse(data), null, ' ') }
      </Form.Field>
      </Form>
    </Segment>
  )
}

export default Export