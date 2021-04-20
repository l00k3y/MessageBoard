import React, { Component } from 'react';
import { List } from '@material-ui/core';
import CssBaseline from "@material-ui/core/CssBaseline";
import Comment from './components/Comment';
import Header from './components/Header';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    }
  }

  componentDidMount() {
    fetch('./data.json', {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }})
      .then( response => response.json())
      .then( responseJson => {
        const comments = responseJson.data.map(item => {return item;})
        this.setState({ data: comments });
        console.log(this.state.data);
      })
  }

  render() {
    return (
      <div className="main-view">
        <CssBaseline />
        <Header />
        <div className="main-content-view">
          <div className="comment-list-view">
            <List> 
              {this.state.data.map(commentData => {
                return (
                  <Comment key={commentData.id} name={commentData.user.name} comment={commentData.comment} data={commentData}/>
                );
              })}
            </List>
          </div>
        </div>
      </div>
    );
  }
}
export default App;