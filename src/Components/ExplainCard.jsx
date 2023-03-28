import React from 'react'
import { Card, Collapse, Spacer, Text, Link } from '@nextui-org/react'

const ExplainCard = () => {
	return (
		<div className='w-full flex items-center justify-center px-20 mt-20'>
			<Collapse.Group accordion animated bordered>
				<Collapse title='Explaination ' subtitle={'how this  works 💡'}>
					<Text h4>
						The main idea behind this project is to help people to find the best way to help the people in
						need. this is an experimental project to check how Ai could help phsycology.
					</Text>
				</Collapse>
				<Collapse title='how can I Help'>
					<Text>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
						labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
						laboris nisi ut aliquip ex ea commodo consequat.
					</Text>
				</Collapse>
				<Collapse title='Option C'>
					<Text>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
						labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
						laboris nisi ut aliquip ex ea commodo consequat.
					</Text>
				</Collapse>
			</Collapse.Group>
		</div>
	)
}

export default ExplainCard
