import { Component } from 'react'
import {loadGetInitialProps} from "next/dist/lib/utils"
import themes from '../config/themes'
import {compose} from "redux";

const WithTheme = (ComposedComponent) => class WithTheme extends Component {

  static async getInitialProps(ctx) {
    const props = await loadGetInitialProps(ComposedComponent, ctx);
    return { ...props, theme: themes.find(t => t.id === ctx.query.id) }
  }

  render() {
    return (<ComposedComponent {...this.props} />);
  }
};

export default compose(
  WithTheme
)