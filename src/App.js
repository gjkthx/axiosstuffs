import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';



class App extends Component {
  constructor(props){
    super(props)
    this.state={
      user:1
    }
    this.get = this.get.bind(this);
    this.anotherget=this.anotherget.bind(this)
    this.getter = this.getter.bind(this)
  }
  get(){
    axios({
      url:`/api/test/getUserOrders`,
      method:'get'
    }).then((response) =>{
      console.log('button clicked')
      console.log(response)
    })

  }
  getter(){
    axios({
      url:`/api/test/getUser`,
      method:'get'
    }).then((response) =>{
      console.log('button clicked')
      console.log(response)
    })

  }
  anotherget(){
    axios({
      url:'/api/testy',
      method:'get'
    }).then((response) =>{
      console.log(response)
      this.getter()
    })
  }
  render() {
    return (
      <div className="App">
        <button onClick={this.get}>a button</button>
        <button onClick={this.anotherget}>another button</button>
      </div>
    );
  }
}

export default App;
