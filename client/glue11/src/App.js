import React, { Component } from 'react'
import AllTodos from './components/AllToDos';
import Footer from './components/Footer';
import Header from './components/Header';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <AllTodos />
        <Footer />
      </div>
    )
  }
}
