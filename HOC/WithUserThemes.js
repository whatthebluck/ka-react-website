import {Component} from 'react'
import {compose} from "redux";
import {getUsersThemes} from "../redux/actions/auth";
import {loadGetInitialProps} from "next/dist/lib/utils";

const WithUserThemes = (ComposedComponent) => class WithUserThemes extends Component {

  static async getInitialProps (ctx) {
    return {
      ...await loadGetInitialProps(ComposedComponent, ctx)
    }
  }

  async componentWillMount() {
    await this.props.dispatch(getUsersThemes(this.props.user.uid))
  }

  render () {
    return <ComposedComponent {...this.props} />
  }
}

export default compose(
  WithUserThemes
)