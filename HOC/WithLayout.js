import { Component } from 'react'
import {loadGetInitialProps} from "next/dist/lib/utils"
import Menu from '../components/menu/Menu'

export default ComposedComponent => class WithLayout extends Component {

  static async getInitialProps(ctx) {
    return loadGetInitialProps(ComposedComponent, ctx);
  }

  render() {
    return (
      <div>
        <Menu />
        <ComposedComponent {...this.props} />
      </div>
    );
  }
};