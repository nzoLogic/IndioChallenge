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
  let { questions } = this.state
  console.log('path:', path)
  console.log('get: ', _.get(questions, path))
  //  _.remove(questions, _.get(questions, path, 'nothing'))
  questions = _.omit(questions, path)
  questions = _.toArray(questions)
  console.log(questions)
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