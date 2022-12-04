import React, { PureComponent } from 'react'

export default class pureComponent extends PureComponent {
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
    console.log("RENDER: PureComponent IncerementCount")
    return (
      <div>
        <h3>PureComponent</h3>
        <div>{`Count:  ${this.props.count}`}</div>
        <button onClick={this.props.incerementCount}>Increment</button>
      </div>
    )
    }
}
