import { connect }from 'react-redux'
import Link from 'next/link'
import 'isomorphic-fetch'

const Page = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>

      <ul>
        <li><Link href="/index" prefetch><a>Index</a></Link></li>
        <li><Link href="/login?foo=bar" prefetch><a>Login</a></Link></li>
        <li><Link href="/register" prefetch><a>Register</a></Link></li>
      </ul>

      { props.children }

    </div>
  )
}


export default connect(state => state)(Page)