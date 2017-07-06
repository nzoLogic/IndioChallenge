import React from 'react'
import Questions from './Questions.js'

const checkStorage = (key) => {
  return window.localStorage.getItem(key) || [] 
}

function addQuestion(){
  let {questions} = this.state
  questions = questions.concat(Questions({}))
  this.setState({questions: questions})
}

export { checkStorage, addQuestion }