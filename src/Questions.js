

const types = [
  {key: 'y', text: 'Yes / No', value: 'Y/N'},
  {key: 'n', text: 'Number', value: 'number'},
  {key: 't', text: 'Text', value: 'text'},
]
const Questions = ({q='', type='text', conditional=null, subQ=null}) => {
  return {q, type, conditional, subQ}
}

export default Questions