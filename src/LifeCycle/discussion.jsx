import React, { Component } from "react";

class DiscussionList extends Component {
  constructor() {
    super()
    const messages = ['Hi', 'Hell0']
    this.state = {
      messages: this.init(messages),
      count: 1,
    }
  }

  init = (messages) => (
    messages.map((msg) => (
      <div key={`${msg}_${String(new Date())}`}>
        {msg}
      </div>
    ))
  )

  componentDidMount() {
    // const { messages } = this.state
    console.log('child component')
    this.addMessage = setInterval(() => {
      this.setState({
        messages: this.state.messages.concat([<div key={`_${String(new Date())}`}>{`Another one...${this.state.count}`}</div>]),
        count: this.state.count + 1,
      })
    }, 2000)
  }

  shouldComponentUpdate(state) {
    if (this.state.count > 5) return false
    return true
  }

  componentWillUnmount() {
    clearInterval(this.addMessage)
  }

  render() {
    const { messages } = this.state
    return (<>{messages}</>)
  }
}

export default class Discussion extends Component {
  constructor() {
    super()
    this.state = {
      pageTitle: 'Discussion...',
      currentTime: String(new Date())
    }
  }

  componentDidMount() {
    console.log('From Parent....')
    // setInterval(() => {}, 1000)
    this.liveTime = setInterval(() => {
      this.setState({ currentTime: String(new Date()) })
    }, 1000)      
  }

  componentWillUnmount() {
    clearInterval(this.liveTime)
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    // Displaying the previous value of the state
    document.getElementById('prev').innerHTML = 'Previous Time: ' + prevState.currentTime;
    return null
  }
  
  componentDidUpdate() {
    // Displaying the present value of the state
    document.getElementById('current').innerHTML = `Current time: ${this.state.currentTime}`
  }

  render() {
    return (
      <div>
        {this.state.pageTitle}
        <DiscussionList />
        {/* <h4>{this.state.currentTime}</h4> */}
        <div id="prev" />
    		<div id="current" />
      </div>
    )
  }
}


