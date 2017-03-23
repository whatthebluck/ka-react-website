import {Component} from 'react'
import {compose} from "redux";
import {getUser, initFirebase} from "../components/auth/AuthActions";
import {loadGetInitialProps} from "next/dist/lib/utils";

const WithAuth = (ComposedComponent) => class WithAuth extends Component {

  static async getInitialProps (ctx) {
    if(ctx.isServer) await ctx.store.dispatch(getUser(ctx.req))
    return {

      ...await loadGetInitialProps(ComposedComponent, ctx)
    }
  }

  async componentWillMount() {
    await this.props.dispatch(initFirebase(this.props.user))
  }

  render () {
    return <ComposedComponent {...this.props} />
  }
}

export default compose(
  WithAuth
)