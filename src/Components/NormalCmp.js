import React, { Component } from 'react'

export default class NormalComponent extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     count: 0
  //   }
  // }

  // handleIncerementCount = () => {
  //   this.setState({ count: 1 })
  // }


  render() {
    console.log("RENDER: NormalComponent IncerementCount")
    return (
      <div>
        <h3>NormalComponent</h3>
        <div>{`Count:  ${this.props.count}`}</div>
        <button onClick={this.props.incerementCount}>Increment</button>
      </div>
    )
    }
}
