import React from 'react'
import QuestionNode from './QuestionNode.js'

const checkStorage = (key) => {
  return JSON.parse(window.localStorage.getItem(key)) || [] 
}

const saveQuestion = (questions) => {
  window.localStorage.setItem('questions', JSON.stringify([QuestionNode({})]))
}
function addQuestion(){
  let {questions} = this.state
  questions = questions.concat(QuestionNode({}))
  this.setState({questions: questions})
}

function updateQuestionState(prev, props){
  return{
    question: props
  }
}

function updateState(update){
  return {
    state: update
  }
}

export { checkStorage, addQuestion, saveQuestion, updateQuestionState }