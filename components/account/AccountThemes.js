import React from 'react'
import { connect } from 'react-redux'
import {compose} from "redux";


class AccountThemes extends React.Component {
  render() {
    return <pre>{JSON.stringify(this.props.user.themes, null, 2)}</pre>
  }
}


export default compose(
  connect(state => ({...state}))
)(AccountThemes)
