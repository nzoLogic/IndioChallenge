import React, { Component } from 'react'
import { Form, Input, Radio } from 'semantic-ui-react'

class PreviewQuestion extends Component {
  constructor(props){
    super(props)
    this.state = {
      answer: ''
    }
    this.input = this.input.bind(this)
    this.radio = this.radio.bind(this)
    this.handleAnswer = this.handleAnswer.bind(this)
  }
  handleAnswer(e, { value }){
    console.log( e.target, value )
    this.setState({answer: value})
  }
  input(props){
    return <Form.Input 
            label={props.question.question} 
            name='answer' 
            type={props.question.type} 
            placeholder='answer'
            onChange={this.handleAnswer} 
            /> 
  }
  radio(){
    return (
      <Form.Group>
      <Form.Field>
        <Radio
          label='Yes'
          name='answer'
          value='yes'
          checked={this.state.answer === 'yes'}
          onChange={this.handleAnswer}
        />
      </Form.Field>
        <Form.Field control={Radio} label='No' name='answer' value='no' checked={this.state.answer==='no'} onChange={this.handleAnswer} />
      </Form.Group>
    )
  }
  render(){
    const answer = { ...this.state }
    const question = this.props.question
    return(
        <Form.Group>
          { question.type === 'yn' ? this.radio(answer) : this.input(this.props) }
        </Form.Group>
      )
  }
}

export default PreviewQuestion