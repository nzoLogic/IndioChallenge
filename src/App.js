import React, { Component } from 'react';
import { Container } from 'semantic-ui-react'
import TabMenu from './TabMenu.js'

class App extends Component {
  render() {
    return (
      <Container>
        <h3> Form builder</h3>
        <TabMenu />
      </Container>
    );
  }
}

export default App;
