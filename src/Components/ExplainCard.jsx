import React from 'react'
import { Card, Collapse, Spacer, Text, Link , Image} from '@nextui-org/react'

const ExplainCard = () => {
	return (
		<div className='w-full flex items-center justify-center  mt-20'>
			<Collapse.Group accordion animated bordered className={"w-full"}>
				<Collapse title='Explaination ' subtitle={'how this  works 💡'}>
					<Text h6  weight={"light"}>

						The main idea behind this project is to help people to find the best way to help the people in
						need. this is an experimental project to check how Ai could help phsycology. this does not replace actual therapy in any way , this is just to help talk with a person without making them feel uncomfortable . 
					</Text>
					<Spacer x={ 10 } />
					<Text h6 weight={"light"}>
						This is the design arcitecture of the project please give it a look 😊
					</Text>
					<Image src="/images/explaination.svg" alt="Image depicting how this website works " />
										<Text h4>
											If you can work on arcitecture 🏛️ ,  Design 🎨 and code 🤖 , please give a look  <Link href="https://github.com/kiritocode1/memories">@ github  🐈‍⬛</Link> 
					</Text>
				</Collapse>
				<Collapse title='how can I Help' subtitle="this project looks cool 😭, How can i help ??? ">
					<Text h6 weight={"light"}>
						Since this is an experimental project 🔬, we still have a lot of issues we need to fix , like better prompt and better code , if you dont know how to code and want to contribute , there are two ways. 
					</Text>
					<Spacer x={0}/>
					<Text bold h6 weight={"light"}>
						1. You can contribute  using <Link hfer="https://github.com/sponsors/kiritocode1" color="warning" >github Sponsors</Link> 💝🐈‍⬛ ,  Which will be directly used in buying gpt-4 Api arcitecture and better infrastructure and better functionality . 
					</Text>
					<Spacer x={0}/>

										<Text bold h6 weight={"light"}>
						2. You can join our team , help us consult real phsycologists 👩‍🔬 , fix the code 👨‍💻 , raise issues , share with other peeps 🥰. 
					</Text>
				</Collapse>
				<Collapse title='Core team members ' subtitle="who is working on this project ">
					<Text h6 weight={"light"}>
						There are currently 3 friends who are  maintaining this project : 
					</Text>
					<Spacer x={0}/>
					<Text h6 i weight={"light"}>
					<Link color="secondary" block href="https://github.com/kiritocode1">
					Aryan Kathawale (@kiritocode1)
					</Link>~ Developer 🪄🎩 , musician 🎧🎸, worked on backend and Integration . </Text>
					<Text h6 i  weight={"light"}>
					<Link color="warning" block href="https://github.com/Sakshifand/">
					Sakshi Fand (@sakshifand)
					</Link>~ Developer 👩‍🔬, loves flowers 🌼 , worked on Error correction and API request .</Text>
										<Text h6 i weight={"light"}>
					<Link color="error" block href="https://github.com/riya987654/" >
					Riya wasnik (riya987654)
					</Link>~  Front End Dev 🎨,  loves  books 📚 &	 music  , GPT Prompt control  and QA tester . </Text>

					<Text h6 weight={"light"}> We would appreciate more people to contribute to the project and learn uses of AI , thank you for everything 😇😊.  </Text>
				</Collapse>
			</Collapse.Group>
		</div>
	)
}

export default ExplainCard
