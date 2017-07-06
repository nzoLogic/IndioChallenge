import React from 'react'
import Questions from './Questions.js'

const checkStorage = (key) => {
  return JSON.parse(window.localStorage.getItem(key)) || [] 
}

const saveQuestion = (questions) => {
  window.localStorage.setItem('questions', JSON.stringify([Questions({})]))
}
function addQuestion(){
  let {questions} = this.state
  questions = questions.concat(Questions({}))
  this.setState({questions: questions})
}


export { checkStorage, addQuestion, saveQuestion }