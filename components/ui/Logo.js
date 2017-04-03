import React from 'react'
import Link from 'next/link'

const Logo = () => {
	return (
		<Link href="/">
			<div>
				<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="120" height="104" viewBox="0 0 120 103.92304845413263">
					<path fill="#fff" d="M0 51.96152422706631L30 0L90 0L120 51.96152422706631L90 103.92304845413263L30 103.92304845413263Z"/>
				</svg>
				<a href="/">K<span>oken</span> A<span>ddons</span></a>
				<style jsx>{`
					div {
						display: inline-block;
						position: relative;
						max-width: 120px;
						width: 100%;
						top: 0;
						bottom: 0;
						left: 0;
						right: 0;
					}

					a {
						text-decoration:none;
						font-size: 24PX;
						font-weight: bold;
						line-height: 104px;
						position: absolute;
						top: 0;
						left: 0px;
						bottom: 0;
						right: 0;
						text-align: center;
						color: #000;
						width: 100%;
						height: 100%;
						letter-spacing: -2px;
					}

					a span { display: none; }
			`}</style>

			</div>
		</Link>
	)
}

export default Logo