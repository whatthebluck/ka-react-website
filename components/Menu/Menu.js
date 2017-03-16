import { connect }from 'react-redux'
import Link from 'next/link'
import {compose} from "redux";
import {logout} from "../login/LoginActions";

const Menu = (props) => {

  const handleLogout = e => {
    e.preventDefault()
    console.log('test')
    props.dispatch(logout())
  }

  const links = [
    {
      id: 'home',
      name: 'Home',
      props: { href: '/'},
      show: true
    },
    {
      id: 'login',
      name: 'Login',
      props: {href: '/login'},
      show: !props.user
    },
    {
      id: 'logout',
      name: 'Logout',
      props: { href: '#', onClick: handleLogout },
      show: props.user
    },
    {
      id: 'register',
      name: 'Register',
      props: { href: '/register' },
      show: !props.user
    },
    {
      id: 'account',
      name: 'My Account',
      props: { href: '/account' },
      show: props.user
    },
  ]

  return (
    <ul>
      { links.map(link =>
        link.show && <li key={link.id}>
          { !link.props.onClick && <Link { ...link.props } prefetch><a>{link.name}</a></Link>}
          { link.props.onClick && <a { ...link.props }>{link.name}</a>}
        </li>
      ) }
    </ul>
  )
}


export default compose(
  connect(state => ({...state}))
)(Menu)