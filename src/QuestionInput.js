import React, { Component } from 'react'
import { Form, Input, Dropdown, Select, Button } from 'semantic-ui-react'
import Condition from './Condition.js'
import { updateQuestionState } from './Local.js'
import QuestionNode from './Questions.js'

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
    let question = { ...this.state.question }
    question['subQ'].concat(QuestionNode({isSub: true}))
    
    this.setState({question: question})
  }

  handleInputChange = (e) => {
    let { name, value } = e.target, 
        question = {...this.state.question }

    if( !name ){
      value = e.target.parentElement.getAttribute('name') || e.target.getAttribute('name')
      name = 'type'
    } 
    question[name] = value
    this.setState(updateQuestionState(this.state.question, question))
  }
  
  render(){
    const question = this.state
    const { subQ } = this.state.question
    return(
      <div>
        { this.props.question.isSub[0] ? Condition() : null }
        <Form.Field inline control={Input} label='QuestionNode' name='q' type={question.type} placeholder='question' value={question.value} onChange={this.handleInputChange}/>
        <Form.Field inline control={Select} label='Type' name='type' options={typeOptions} value={question.type} placeholder='select type' onChange={this.handleInputChange}/>
        
        <Form.Group>
          <Button onClick={this.addSubQuestion}>Add Sub-Input</Button>
          <Button>Delete</Button>
        </Form.Group>
        
        { 
          subQ.map( (q, i) => <QuestionInput key={i} question={q} />)
      }
      </div>
    )
  }
  
}

export default QuestionInput


let QuestionNode = ({question='', type='text', condition=null, isSub=false, subQuestions=[]}) => {
  return{ question, type, condition, isSub, subQuestions }
}

let questions=[QuestionNode({}), QuestionNode({}), QuestionNode({})]