import React from 'react'
import { Textarea } from '@nextui-org/react'

const OutputArea = () => {
	return (
		<span>
			<Textarea readOnly status='success' initialValue='loading... ' width='400px' label='Responce ' />
		</span>
	)
}

export default OutputArea
