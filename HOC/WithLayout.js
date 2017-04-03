import React, { Component } from 'react'
import {loadGetInitialProps} from "next/dist/lib/utils"
import Menu from '../components/menu/Menu'
import styles, {injectGlobal} from "styled-components";
import Link from 'next/link'

export default ComposedComponent => class WithLayout extends Component {

  static async getInitialProps(ctx) {
    return await loadGetInitialProps(ComposedComponent, ctx);
  }

  render() {
    return (
      <div>
        <Header>
          <LogoContainer>
            <Link href="/"><a>Logo</a></Link>
          </LogoContainer>
          <MenuContainer>
            <Menu />
          </MenuContainer>
        </Header>

        <Container>
          <ComposedComponent {...this.props} />
        </Container>
      </div>
    );
  }
};


injectGlobal`
	body {
	  background: #010101;
	  margin: 0;
    color: #fff;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: 400;
    line-height: 1.8;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: subpixel-antialiased;
	}
`

const Container = styles.div`
  width: 800px;
  margin: 0 auto;
`

const LogoContainer = styles.div`
 width: 50%;
  float: left;
`
const Header = styles.div`
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
`

const MenuContainer = styles.div`
  text-align: right;
  width: 50%;
  float: right;
`