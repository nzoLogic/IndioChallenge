import React, { Component } from 'react';
import { Container } from 'semantic-ui-react'
import { checkStorage } from './Local.js'
import TabMenu from './TabMenu.js'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      questions: checkStorage()
    }
    this.checkStorage = checkStorage
  }
  
  render() {
    const { questions } = this.state
    return (
      <Container>
        <h3> Form builder</h3>
        <TabMenu questions={questions}/>
        
      </Container>
    );
  }
}

export default App;
