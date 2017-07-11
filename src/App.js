import React, { Component } from 'react';
import { Container, Button, Reveal } from 'semantic-ui-react'
import _ from 'lodash'
import { checkStorage, addQuestion, saveQuestions, stringify, deleteQuestion } from './Local.js'
import TabMenu from './TabMenu.js'
import Export from './Export.js'
import QuestionForm from './QuestionForm.js'


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      activeItem: 'Create'
    }
    this.checkStorage = checkStorage
    this.addQuestion = addQuestion.bind(this)
    this.deleteQuestion = deleteQuestion.bind(this)
    this.handleTabClick = this.handleTabClick.bind(this)
    this.updateQuestions = this.updateQuestions.bind(this)
  }
  
  updateQuestions(path, value){
    const { questions } = this.state
    _.set(questions, path, value)
    this.setState({questions})
  }
  componentWillMount(){
    const questions = checkStorage('questions')
    this.setState({questions: questions})
  }
  componentDidUpdate(){
    console.log('component updated')
    const { questions } = this.state
    stringify( questions, saveQuestions)
  }
  
  handleTabClick = (e, { name }) => this.setState({ activeItem: name })
  
  render() {
    const { questions } = this.state
    const { activeItem } = this.state
    const VIEWS = {
      'Create': <QuestionForm 
      questions={questions} deleteQuestion={this.deleteQuestion} updateQuestions={this.updateQuestions} />,
    'Preview': null,
    'Export': <Export />
    }
    return (
      <Container>
        <h3> Form builder</h3>
        <TabMenu handleTabClick={this.handleTabClick} activeItem={this.state.activeItem}/>
        
          { VIEWS[activeItem] }
        
        <Button primary onClick={this.addQuestion}>
          Add Input
        </Button>
      </Container>
    );
  }
}

export default App;
