import React, { Component } from 'react'
import { connect } from 'react-redux'
import AppActions from '../Actions'

export class index extends Component {

  componentDidMount() {
    const { getUsers } = this.props
    getUsers()
  }
  render() {
    console.log("vk props", this.props)
    const { appName } = this.props
    return (
      <div>
        {appName}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  appName: state.App.appName,
  users: state.App.users,
})

const mapDispatchToProps = (dispatch) => ({
  getUsers: () => dispatch(AppActions.getUsers())
})

export default connect(mapStateToProps, mapDispatchToProps)(index)