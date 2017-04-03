import React from 'react'
import { connect }from 'react-redux'
import Link from 'next/link'
import {compose} from "redux";
import {logout} from "../../redux/actions/auth";

const Menu = (props) => {

  const handleLogout = e => {
    e.preventDefault()
    props.dispatch(logout)
  }

  const links = [
    {
      id: 'home',
      name: 'Home',
      props: { href: '/'},
      show: true
    },
    {
      id: 'themes',
      name: 'Themes',
      props: { href: '/themes'},
      show: true
    },
    {
      id: 'login',
      name: 'Login',
      props: {href: '/login'},
      show: !props.user.uid
    },
    {
      id: 'logout',
      name: 'Logout',
      props: { href: '#', onClick: handleLogout },
      show: props.user.uid
    },
    {
      id: 'register',
      name: 'Register',
      props: { href: '/register' },
      show: !props.user.uid
    },
    {
      id: 'account',
      name: 'My Account',
      props: { href: '/account' },
      show: props.user.uid
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