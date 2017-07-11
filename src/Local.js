import React from 'react'
import QuestionNode from './QuestionNode.js'
import _ from 'lodash'

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

function deleteQuestion(path){
  const { questions } = this.state
  _.pullAt(questions, path)
  this.setState({questions: questions})
}

function stringify(value, cb){
  let string = JSON.stringify(value)
  return cb ? cb(string) : string
}

function exportStorage(){
  return window.localStorage.getItem('questions')
}


export { 
  checkStorage, 
  addQuestion, 
  deleteQuestion, 
  saveQuestions, 
  stringify, 
  exportStorage 
}