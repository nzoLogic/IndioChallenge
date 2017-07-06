import React, { Component } from 'react';
import { Container } from 'semantic-ui-react'
import { checkStorage, addQuestion, saveQuestion } from './Local.js'
import TabMenu from './TabMenu.js'

saveQuestion()

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      questions: checkStorage('questions')
    }
    this.checkStorage = checkStorage
  }
  addQuestion = addQuestion.bind(this)
  render() {
    const { questions } = this.state
    return (
      <Container>
        <h3> Form builder</h3>
        <TabMenu questions={questions} addQuestion={this.addQuestion}/>
        
      </Container>
    );
  }
}

export default App;
