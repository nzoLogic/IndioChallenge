import React, { Component } from 'react'
import { Form, Input, Radio } from 'semantic-ui-react'
import _ from 'lodash'


/* 

  Controlled component delegates logic of each input based on the updated state of the question answered
  
  If an answer meets a condition, metCondition is a PreviewQuestion component with the data that matched based on handleAnswer 
  

*/
class PreviewQuestion extends Component {
  constructor(props){
    super(props)
    this.state = {
      answer: '',
      metCondition: null
    }
    this.input = this.input.bind(this)
    this.radio = this.radio.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleAnswer = this.handleAnswer.bind(this)
    this.handleRef = this.handleRef.bind(this)
  }
  handleRef(r){
    if(r !== null) r.inputRef.onblur = this.handleAnswer
  }
  handleInputChange(e, { name, value }){
    console.log(e.target.value)
    this.state.answer = value
    if(name === 'radio') this.handleAnswer()
  }
  handleAnswer(value){
    const { question } = this.props
    const { type, subQ } = question
    const { answer } = this.state
    let a = _.find(subQ, q => {
      let { condition, value } = q.conditions
      
        if(type === 'text' || type ==='yn' || condition === 'equals') return answer === value
        
        if(condition === 'less') return parseInt(answer) < parseInt(value)
        return parseInt(answer) > parseInt(value)
    })
    this.setState({metCondition: a})
  }
  input(props){
    return <Input className='answer'
            focus={false}
            ref={this.handleRef}
            name='answer' 
            type={props.question.type} 
            placeholder='answer'
            onChange={this.handleInputChange}
            /> 
  }
  radio(){
    return (
      <Form.Group>
        <Form.Field control={Radio} type='radio' label='Yes' name='radio' value='yes' checked={this.state.answer==='yes'} onChange={this.handleInputChange}/>
        <Form.Field control={Radio} type='radio' label='No' name='radio' value='no' checked={this.state.answer==='no'} onChange={this.handleInputChange} />
      </Form.Group>
    )
  }
  render(){
    const { metCondition } = this.state
    const style = {
      marginLeft: `${this.props.marginLeft}px`
    }
    let question = { ...this.props.question }

    return(
      <div>
        <br></br>
        <Form.Group style={style}>
          <Form.Field>
            <label> {question.question} </label>
            { question.type === 'yn' ? this.radio() : this.input(this.props) }
          </Form.Field>
        </Form.Group>
        
        { metCondition ? 
          <PreviewQuestion question={metCondition} marginLeft={this.props.marginLeft + 20}/>  : null }
      </div>
      )
  }
}

export default PreviewQuestion