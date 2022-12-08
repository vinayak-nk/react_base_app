import React, { Component } from 'react'

export class index extends Component {
  constructor() {
    super()
    this.state = {
      count: 0,
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => { 
      this.setState(prevState => ({count: prevState.count + 1}))
    }, 5 * 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    return (
      <div>{`Count Class: ${this.state.count}`}</div>
    )
  }
}

export default index