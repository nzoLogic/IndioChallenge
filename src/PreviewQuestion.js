import React, { Component } from 'react'
import { Form, Input, Radio, Label } from 'semantic-ui-react'
import _ from 'lodash'

class PreviewQuestion extends Component {
  constructor(props){
    super(props)
    this.state = {
      answer: '',
      metCondition: null
    }
    this.input = this.input.bind(this)
    this.radio = this.radio.bind(this)
    this.updateAnswer = this.updateAnswer.bind(this)
    this.handleAnswer = this.handleAnswer.bind(this)
    this.handleRef = this.handleRef.bind(this)
    this.onEnter = this.onEnter.bind(this)
  }
  handleRef(r){
    if(r !== null) r.inputRef.onblur = this.handleAnswer
  }
  updateAnswer(e, { name, value }){
    console.log(name, value)
    this.setState({answer: value})
    this.handleAnswer(value)
  }
  handleAnswer(){
    const { question } = this.props
    const { subQ } = question
    const { answer } = this.state
    let a = _.find(subQ, q => {
      let { condition, value } = q.conditions
        if(question.type === 'text' || question.type ==='yn' || condition === 'equals') return answer === value
        if(condition === 'less') return parseInt(answer) < parseInt(value)
        return parseInt(answer) > parseInt(value)
    })
    this.setState({metCondition: a})
  }
  onEnter(e){
    if(e.code === 'Enter') this.handleAnswer()
  }
  input(props){
    return <Input className='answer'
            focus={false}
            ref={this.handleRef}
            name='answer' 
            type={props.question.type} 
            placeholder='answer'
            onChange={this.updateAnswer}
            /> 
  }
  radio(){
    return (
      <Form.Group>
        <Form.Field control={Radio} label='Yes' name='answer' value='yes' checked={this.state.answer==='yes'} onChange={this.updateAnswer}/>
        <Form.Field control={Radio} control={Radio} label='No' value='no' checked={this.state.answer==='no'} onChange={this.updateAnswer} />
      </Form.Group>
    )
  }
  render(){
    const state = { ...this.state }
    const { answer } = state
    const { metCondition } = state
    const question = { ...this.props.question }

    return(
      <div>
        <Form.Group>
          <Form.Field>
            <label> {question.question} </label>
            { question.type === 'yn' ? this.radio() : this.input(this.props) }
          </Form.Field>
        </Form.Group>
        
        { metCondition ? <PreviewQuestion question={metCondition}/>  : null }
      </div>
      )
  }
}

export default PreviewQuestion