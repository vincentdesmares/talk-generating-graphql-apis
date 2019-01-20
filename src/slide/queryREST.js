import React from 'react'
import { Heading, Slide, Notes, Image } from 'spectacle'

export default (
  <Slide
    transition={['fade']}
    bgColor="white"
    textColor="black"
    progressColor="black"
    controlColor="black"
  >
    <Notes />
    <Heading size={6} textColor="pink" caps fit>
      A REST Query
    </Heading>
    <Image src="/assets/images/rest.png" />
  </Slide>
)
