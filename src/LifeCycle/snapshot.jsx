import React from 'react'
class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {x:1};
    console.log(1);
 }
 componentDidMount() {
    this.setState({x:2});
    console.log(3);
 }
 shouldComponentUpdate() {
    console.log(4);
    return true;
 }
 getSnapshotBeforeUpdate(prevProps, prevState){
    console.log(5,prevState.x, this.state.x);
    return 999;
 }
 componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(6, prevState.x, this.state.x, snapshot);
 }
 componentWillUnmount() {
    console.log(7);
 }
 render() {
    console.log(2);
    return null;
 }
}

export default Demo
