
const QuestionNode = ({
  question='', 
  type='text', 
  condition=null, 
  isSub= false, 
  subQ=[]}) => {
  return {question, type, condition, isSub, subQ}
}

export default QuestionNode

