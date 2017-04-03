// ./pages/_document.js
import Document, {Head, Main, NextScript} from 'next/document'
import flush from 'styled-jsx/server'

export default class MyDocument extends Document {
	static getInitialProps({renderPage}) {
		const {html, head} = renderPage()
		const styles = flush()
		return {html, head, styles}
	}

	render() {
		return (
			<html>
			<Head>
				<link rel="stylesheet" media="screen" href="/static/css/normalize.css"/>
				<style>{`
						* { box-sizing: border-box; }
						body {
							margin: 0;
							background: #101010;
							color: #ffffff;
							font-family: Helvetica Neue, Arial, sans-serif;
						}
					`}</style>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
			</html>
		)
	}
}