import React from 'react'

const Questions = {
  q: null,
  type: null,
  subq: null
}

const checkStorage = (key) => {
  let questions = window.localStorage.getItem(key) || Questions
  return questions 
}

export { checkStorage }