import React from 'react'
import Menu from '../components/menu/Menu'
import { Container, Logo } from '../components/ui'

const Header = () => {
	return (
		<Container>
			<div>
				<Logo />
				<Menu />
			</div>

			<style jsx>{`
					div {
						text-align: center;
					}
			`}</style>

		</Container>
	)
}

export default Header