import React from 'react'
import { Heading, Slide, Notes } from 'spectacle'

export default (
  <Slide
    transition={['zoom']}
    bgColor="yellow"
    progressColor="black"
    controlColor="black"
  >
    <Notes>
      <p>Not about client side</p>
    </Notes>
    <Heading size={1} caps lineHeight={1} fit textColor="black">
      REST VS GRAPHQL
    </Heading>
  </Slide>
)
