import React, {Component} from 'react'
import {loadGetInitialProps} from "next/dist/lib/utils"
import Header from '../components/Header'

export default ComposedComponent => class WithLayout extends Component {

	static async getInitialProps(ctx) {
		return await loadGetInitialProps(ComposedComponent, ctx);
	}

	render() {
		return (
			<div>
				<Header />
				<ComposedComponent {...this.props} />
			</div>
		);
	}
};
