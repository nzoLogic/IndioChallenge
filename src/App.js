import React, { Component } from 'react';
import { Container, Button } from 'semantic-ui-react'
import _ from 'lodash'
import { checkStorage, addQuestion, saveQuestion } from './Local.js'
import TabMenu from './TabMenu.js'
import QuestionForm from './QuestionForm.js'
import QuestionNode from './QuestionNode.js'
const sample = [
  QuestionNode({
    subQ: [QuestionNode({
      isSub: true, subQ: [
      QuestionNode({isSub: true})
    ]}
  )]
  }),
  QuestionNode({}),
  QuestionNode({}),
]

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      questions: sample,
      activeItem: 'Create'
    }
    this.checkStorage = checkStorage
    this.addQuestion = addQuestion.bind(this)
    this.handleTabClick = this.handleTabClick.bind(this)
    this.updateQuestions = this.updateQuestions.bind(this)
  }
  
  updateQuestions(path, value){
    const { questions } = this.state
    _.set(questions, path, value)
    this.setState({questions})
  }
  componentWillMount(){
    saveQuestion()
  }
  
  handleTabClick = (e, { name }) => this.setState({ activeItem: name })
  
  render() {
    const { questions } = this.state
    return (
      <Container>
        <h3> Form builder</h3>
        <TabMenu handleTabClick={this.handleTabClick} activeItem={this.state.activeItem}/>
        
        <QuestionForm questions={questions} updateQuestions={this.updateQuestions} />
        
        <Button primary onClick={this.addQuestion}>
          Add Input
        </Button>
      </Container>
    );
  }
}

export default App;
