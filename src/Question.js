import React, { Component } from 'react'
import { Form, Button, Segment } from 'semantic-ui-react'
import { updateInputValue, handleConditionChange } from './QuestionHelper.js'
import ConditionSelect from './ConditionSelect.js'
import ConditionAnswer from './ConditionAnswer.js'
import TypeInput from './TypeInput.js'
import QuestionInput from './QuestionInput.js'
import QuestionNode from './QuestionNode.js'

class Question extends Component{
  constructor(props){
    super(props)
    this.updateInputValue = updateInputValue.bind(this)
    this.handleConditionChange = handleConditionChange.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }
  addSubQuestion = (e) => {
    let question = { ...this.props.question }
    
    question['subQ'].push(QuestionNode({isSub: true, conditions:{condition: 'equals', value: '' }}))
    
    this.props.updateQuestions(this.props.path, question)
  }
  
  handleDelete(e){
    let { isSub } = this.props.question
    this.props.deleteQuestion( this.props.path, isSub)
  }
  
  
  render(){
    const props = this.props
    const question = props.question
    const subMargin = props.marginLeft + 20

    const styles = {
      marginLeft: `${props.marginLeft}px`
    }
    return(
      <div style={styles}>
    <Segment>
        { props.question.isSub ? 
        <Form.Group>
          <ConditionSelect 
              name='condition' value={question.conditions.condition} onChange={this.handleConditionChange} type={props.parentType} 
          />
          <ConditionAnswer 
            value={question.conditions.value} onChange={this.handleConditionChange} type={props.parentType} 
          />
        </Form.Group> : null }
        
        <QuestionInput type={question.type} value={question.question} onChange={this.updateInputValue}/>
        
        <TypeInput type={question.type} onChange={this.updateInputValue} />
        
        <Form.Group widths='equal'>
          <Button onClick={this.addSubQuestion}>Add Sub-Input</Button>
          <Button onClick={this.handleDelete}>Delete</Button>
        </Form.Group>
      </Segment>
      
        { question.subQ.map( (q, i) => 
          <Question key={i} 
            path={`${props.path}.subQ[${i}]`} 
            question={q} marginLeft={subMargin} updateQuestions={this.props.updateQuestions} deleteQuestion={this.props.deleteQuestion} parentType={question.type} 
          /> ) }
      </div>
    )
  }
  
}

export default Question

