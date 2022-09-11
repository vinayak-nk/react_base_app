import React, { Component } from "react";
import NormalComponent from "./Components/NormalCmp";
import PureComponent from "./Components/PureCmp";
import Memo from "./Components/Memo";
import WithooutMemo from "./Components/WithoutMemo";
import UseCallbackComp from "./Components/UseCallBackCmp";

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    }
  }

  handleIncerementCount = () => {
    this.setState({ count: 1 })
  }

  render() {
    return (
      <div className="App">
        <NormalComponent count={this.state.count} incerementCount={this.handleIncerementCount} />
        <PureComponent count={this.state.count} incerementCount={this.handleIncerementCount} />
        <Memo count={this.state.count} incerementCount={this.handleIncerementCount} />
        <WithooutMemo count={this.state.count} incerementCount={this.handleIncerementCount} />
        <UseCallbackComp count={this.state.count} />
      </div>
    );
  }
}

export default App
