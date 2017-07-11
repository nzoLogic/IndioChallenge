import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'
import PreviewQuestion from './PreviewQuestion.js'
import { checkStorage } from './Local.js'

class Preview extends Component {
  constructor(props){
    super(props)
    this.state = {
      questions: []
    }
  }
  componentWillMount(){
    const questions = checkStorage('questions')
    this.setState({questions: questions})
  }
  render(){
    const { questions } = this.state
    return(
      <Form>
        {
          questions.map( (q, i) => <PreviewQuestion key={i} question={q} />)
        }
      </Form>
    )
  }
}

export default Preview