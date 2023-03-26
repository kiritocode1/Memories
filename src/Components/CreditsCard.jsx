import React from 'react'
import { Card, Text } from '@nextui-org/react'
const CreditsCard = () => {
  return (
              <Card isHoverable isPressable   className="bg-black" css={{ mw: "300px" }}>
            <Card.Body className="bg-black  ">
              <Text color="$gray500">Made with 💖 by Riya , Aryan and Sakshi</Text>
            </Card.Body>
          </Card>
  )
}

export default CreditsCard