import React from 'react'
import { Heading, Slide, Notes, Text } from 'spectacle'

export default (
  <Slide
    transition={['zoom']}
    bgColor="yellow"
    progressColor="black"
    controlColor="black"
  >
    <Notes>
      <p>WHAT GSG SOLVES</p>
    </Notes>
    <Heading size={1} caps lineHeight={1} fit textColor="black">
      WHAT GSG SOLVES
    </Heading>
    <Text fit>Or at least tries to solves</Text>
  </Slide>
)
