const conditionBook = ['equals', 'greater', 'less']
const conditionValueBook = ['yes', 'no']

function handleConditionChange(e){
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

function updateInputValue(e){
    let { name, value } = e.target, 
        question = {...this.props.question },
        conditions = question.conditions

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