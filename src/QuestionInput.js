import React, { Component } from 'react'
import { Form, Input, Dropdown, Select, Button } from 'semantic-ui-react'
import Condition from './Condition.js'
import { updateQuestionState } from './Local.js'
import Question from './Questions.js'

const typeOptions = [
  {key: 'yn', name: 'yn', text: 'Yes/No', value: 'yn'},
  {key: 'text', name: 'text', text: 'Text', value: 'text'},
  {key: 'number', name: 'number', text: 'Number', value: 'number'}
]


class QuestionInput extends Component{
  constructor(props){
    super(props)
    this.state = this.props
  }
  addSubQuestion = (e) => {
    const { question } = this.state
    question['subQ'] = <QuestionInput question={Question({isSub:true})}/>
    
    this.setState({question: question})
  }

  handleInputChange = (e) => {
    const { question } = this.state
    let { name, value } = e.target 

    if( !name ){
      value = e.target.parentElement.getAttribute('name') || e.target.getAttribute('name')
      name = 'type'
    } 
    question[name] = value
    this.setState(updateQuestionState(this.state, question))
  }
  
  render(){
    const question = this.state
    return(
      <div>
        { this.props.question.isSub ? Condition() : null }
        <Form.Field inline control={Input} label='Question' name='q' type={question.type} placeholder='question' value={question.value} onChange={this.handleInputChange}/>
        <Form.Field inline control={Select} label='Type' name='type' options={typeOptions} value={question.type} placeholder='select type' onChange={this.handleInputChange}/>
        
        <Form.Group>
          <Button onClick={this.addSubQuestion}>Add Sub-Input</Button>
          <Button>Delete</Button>
        </Form.Group>
        
        { this.props.children }
      </div>
    )
  }
  
}

export default QuestionInput