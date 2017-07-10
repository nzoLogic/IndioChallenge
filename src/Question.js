import React, { Component } from 'react'
import { Form, Button } from 'semantic-ui-react'
import Condition from './Condition.js'
import TypeInput from './TypeInput.js'
import QuestionInput from './QuestionInput.js'
import QuestionNode from './QuestionNode.js'

class Question extends Component{
  constructor(props){
    super(props)
    this.updateInputValue = this.updateInputValue.bind(this)
  }
  addSubQuestion = (e) => {
    let question = { ...this.props.question }
    question['subQ'].push(QuestionNode({isSub: true}))
    
    this.props.updateQuestions(this.props.path, question)
  }
  
  updateInputValue(e){
    let { name, value } = e.target, 
        question = {...this.props.question }
    if( !name ){
      value = e.target.parentElement.getAttribute('name') || e.target.getAttribute('name')
      name = 'type'
    } 
    question[name] = value
    this.props.updateQuestions(this.props.path, question)
  }
  
  increaseMargin(margin){
    return `${margin + 20}px`
  }
  
  render(){
    const props = this.props
    const question = props.question
    const styles = {
      marginLeft: props.marginLeft 
    }

    return(
      <div style={styles}>
        { this.props.question.isSub ? Condition() : null }
        
        <QuestionInput type={question.type} value={question.question} onChange={this.updateInputValue}/>
        
        <TypeInput type={question.type} onChange={this.updateInputValue} />
        
        <Form.Group>
          <Button onClick={this.addSubQuestion}>Add Sub-Input</Button>
          <Button>Delete</Button>
        </Form.Group>
        
        { question.subQ.map( (q, i) => <Question key={i} path={`${props.path}.subQ[${i}]`} question={q} marginLeft={this.increaseMargin(props.marginLeft)} updateQuestions={this.props.updateQuestions} />) }
      </div>
    )
  }
  
}

export default Question

