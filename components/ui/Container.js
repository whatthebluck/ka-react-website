import React from 'react'

const Container = ({children}) => {
	return (
		<div>
			{children}
			<style jsx>{`
      	div {
      		max-width: 1320px;
      		width: 100%;
      		margin: 0 auto;
      		padding: 0 60px;
      	}
    `}</style>
		</div>
	)
}

export default Container