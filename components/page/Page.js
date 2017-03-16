import { connect }from 'react-redux'
import Menu from '../menu/Menu'
import { compose } from "redux"

const Page = (props) => {

  return (
    <div>
      <h1>{props.title}</h1>
      <Menu />
      { props.children }
    </div>
  )
}


export default compose(
  connect(state => ({...state}))
)(Page)