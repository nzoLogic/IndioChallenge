import React, { Component } from 'react'
import { Form, Input, Dropdown, Select, Button } from 'semantic-ui-react'
import Condition from './Condition.js'
import TypeInput from './TypeInput.js'
import QuestionInput from './QuestionInput.js'
import QuestionNode from './QuestionNode.js'

class Question extends Component{
  constructor(props){
    super(props)
    this.state = this.props
  }
  addSubQuestion = (e) => {
    let question = { ...this.state.question }
    question['subQ'].concat(QuestionNode({isSub: true}))
    
    this.setState({question: question})
  }
  
  handleInputChange(e){
    console.log(e._targetInst)
    let { name, value } = e.target, 
        question = {...this.state.question }
    if( !name ){
      value = e.target.parentElement.getAttribute('name') || e.target.getAttribute('name')
      name = 'type'
    } 
    question[name] = value
    this.setState({question: question})
  }
  
  render(){
    const props = this.props
    const question = props.question

    return(
      <div>
        { this.props.question.isSub ? Condition() : null }
        
        <QuestionInput type={question.type} value={question.value} onChange={this.handleInputChange}/>
        
        <TypeInput type={question.type} onChange={this.handleInputChange} />
        <Form.Group>
          <Button onClick={this.addSubQuestion}>Add Sub-Input</Button>
          <Button>Delete</Button>
        </Form.Group>
        
        { question.subQ.map( (q, i) => <Question key={i} question={q} />) }
      </div>
    )
  }
  
}

export default Question

