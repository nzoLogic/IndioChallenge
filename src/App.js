import React, { Component } from 'react';
import { Container } from 'semantic-ui-react'
import _ from 'lodash'
import { checkStorage, addQuestion, saveQuestions, stringify, deleteQuestion } from './Local.js'
import TabMenu from './TabMenu.js'
import Export from './Export.js'
import Preview from './Preview.js'
import QuestionForm from './QuestionForm.js'

/*

  Primary control point for updating the state of the application, reading and writing to local storage, and passing data down to the children views.
  
  Children views: QuestionForm.js, Preview.js, Export.js

*/
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
    const { questions } = this.state
    stringify( questions, saveQuestions)
  }
  
  handleTabClick = (e, { name }) => this.setState({ activeItem: name })
  
  render() {
    const { questions } = this.state
    const { activeItem } = this.state
    const VIEWS = {
      'Create': <QuestionForm 
      questions={questions} addQuestion={this.addQuestion} deleteQuestion={this.deleteQuestion} updateQuestions={this.updateQuestions} /> ,
    'Preview': <Preview />,
    'Export': <Export />
    }
    return (
      <Container>
        <h3> Form builder</h3>
        <TabMenu handleTabClick={this.handleTabClick} activeItem={this.state.activeItem}/>
        
          { VIEWS[activeItem] }
      </Container>
    );
  }
}

export default App;
