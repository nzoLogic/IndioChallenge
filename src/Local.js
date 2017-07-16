import React from 'react'
import QuestionNode from './QuestionNode.js'
import _ from 'lodash'

/* 
  Library of helper functions dealing with updating, deleting, and converting JSON data with localStorage object
*/
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

/* 
  deletes question at the parent level
  path: string, location of node 
  isSub: bool
*/
function deleteQuestion(path, isSub){
  let { questions } = this.state,
      parent
  
  questions = _.omit(questions, path)
  questions = _.toArray(questions)

  if( isSub ){
    parent = _.toPath(path).slice(0, -1) 
    _.pull(_.get(questions, parent), null, undefined)
  }
  else _.pull(questions, null, undefined)
  
  this.setState({questions: questions})
}
/* 
  JSON stringify helper 
  takes optional callback
*/ 
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