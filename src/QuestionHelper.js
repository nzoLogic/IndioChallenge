const conditionBook = ['equals', 'greater', 'less']

/* 

  Helper library for updating state, handling nested Questions, and event listeners for Question.js 
  
*/


//callback for changes to the Condition Component 
function handleConditionChange(e){ 
  console.log(this, e.target)
  let { name, value } = e.target,
      question = { ...this.props.question },
      conditions = question.conditions
  if( !name ){
    value = e.target.parentElement.getAttribute('name') || e.target.getAttribute('name')
    name = conditionBook.includes(value) ? 'condition' : 'value'
  } 
  conditions[name] = value
  question['conditions'] = conditions
  this.props.updateQuestions(this.props.path, question)
}
/* 
  callback function for updating state based on input value 
  
  subsequently calls updateQuestions, updating root node 
*/
function updateInputValue(e){
    let { name, value } = e.target, 
        question = {...this.props.question }
        
    if( !name ){
      value = e.target.parentElement.getAttribute('name') || e.target.getAttribute('name')
      name = 'type'
    } 
    question[name] = value
    this.props.updateQuestions(this.props.path, question)
}
  
export {
  handleConditionChange,
  updateInputValue
}