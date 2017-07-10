import React from 'react'
import QuestionNode from './QuestionNode.js'

function checkStorage( key ){
  return JSON.parse(window.localStorage.getItem(key)) || [] 
}

function saveQuestions( questions ){
   return window.localStorage.setItem('questions', questions)
}

function addQuestion(){
  const { questions } = this.state
  questions.push(QuestionNode({}))
  this.setState({questions: questions})
}

function deleteQuestion(){
  
}

function stringify(value, cb){
  let string = JSON.stringify(value)
  console.log(string)
  return cb ? cb(string) : string
}


export { checkStorage, addQuestion, deleteQuestion, saveQuestions, stringify }