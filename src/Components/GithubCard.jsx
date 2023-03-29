import React from 'react'
import { Link } from '@nextui-org/react'

const GithubCard = () => {
	return (
		<Link
			href={'https://github.com/kiritocode1/memories'}
			color='secondary'
			block
			target={'_blank'}
			rel='noopener noreferrer'>
			Version 0.1 / @github
		</Link>
	)
}

export default GithubCard
