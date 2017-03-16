import { connect }from 'react-redux'
import Link from 'next/link'
import 'isomorphic-fetch'

const Page = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>

      <ul>
        <li><Link href="/index" ><a>Index</a></Link></li>
        <li><Link href="/login" ><a>Login</a></Link></li>
        <li><Link href="/register"><a>Register</a></Link></li>
      </ul>

      { props.children }

    </div>
  )
}


function mapStateToProps(state) {
  return {...state};
}

export default connect(mapStateToProps)(Page)