import React from 'react'
import { Textarea } from '@nextui-org/react'
import { useState } from 'react'

const MainPart = () => {
	const [Input, setInput] = useState('')
	const [Result, setResult] = useState('')

	async function onSubmit(event) {
		event.preventDefault() // stop what it does normally

		try {
			const response = await fetch('/api/generate', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ request: Input }),
			})

			const data = await response.json() // extracted data here .
			if (response.status !== 200) {
				throw data.error || new Error(`Request failed with status ${response.status}`)
			}

			setResult(data.result)
			//console.log(`Data set ! ${data.result}`);
			setInput('')
		} catch (error) {
			// Consider implementing your own error handling logic here
			console.error(error)
			alert(error.message)
		}
	}

	return (
		<div className='flex flex-wrap justify-evenly  items-center w-full '>
			<div className=' flex flex-wrap my-20'>
				{/* Input area */}
				<Textarea
					labelPlaceholder='
        im here to listen to you '
					color='secondary'
					status='secondary'
					animated
					required
					shadow
					width="400px"
					onKeyDown={(e) => {
						if (e.key === 'Enter') {
							onSubmit(e) // calls this function on enter
						}
					}}
					onChange={(e) => {
						setInput(e.target.value) // records the keyboard input
						// oh user has pressed enter
						//console.log(Input);
					}}
					value={ Input }
					size="xl"

				/>
			</div>
			<div>
				<span>
					{/* Output area */}
					<Textarea
						readOnly
						status='success'
						initialValue={`${Result}`}
						width='400px'
						hidden={Result === '' ? true : false}
						label='Memory says '
						
					/>
				</span>
			</div>
		</div>
	)
}

export default MainPart
