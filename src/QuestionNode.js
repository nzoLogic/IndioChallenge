
const QuestionNode = ({
  question='', 
  type='text', 
  conditions=null, 
  isSub= false, 
  subQ=[]}) => {
  return {question, type, conditions, isSub, subQ}
}

export default QuestionNode

