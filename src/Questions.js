

const types = [
  {key: 'y', text: 'Yes / No', value: 'Y/N'},
  {key: 'n', text: 'Number', value: 'number'},
  {key: 't', text: 'Text', value: 'text'},
]
const Questions = ({q='', type=null, conditional=null, subQ=null}) => {
  return {q, type, subQ}
}

export default Questions