import React from 'react'
import QuestionNode from './QuestionNode.js'

const checkStorage = (key) => {
  return JSON.parse(window.localStorage.getItem(key)) || [] 
}

const saveQuestion = (questions) => {
  window.localStorage.setItem('questions', JSON.stringify([]))
}
function addQuestion(){
  const { questions } = this.state
  questions.push(QuestionNode({}))
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