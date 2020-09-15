import React, { Component } from 'react';
import Posts from "./containers/Posts";



class App extends Component {

  setId(id) {
    return id;
  }

  render () {
    return (
      <Posts 
        id={this.setId(2)}
        comments={2} retweet={10} heart={10} />
    );
  } 
}

export default App;
