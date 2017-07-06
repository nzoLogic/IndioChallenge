import React from 'react'

const checkStorage = (key) => {
  return window.localStorage.getItem(key) || [] 
}

export { checkStorage }