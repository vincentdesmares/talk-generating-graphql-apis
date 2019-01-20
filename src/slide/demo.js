import React from 'react'
import { Heading, Slide, Text, Notes } from 'spectacle'

export default (
  <Slide
    transition={['fade']}
    bgColor="yellow"
    progressColor="black"
    controlColor="black"
  >
    <Notes>Show you the components</Notes>
    <Heading size={6} textColor="pink" caps fit>
      DEMO TIME
    </Heading>
    <Text size={6} textColor="purple" margin="20px 0" bold>
      With node-jobs, a simple POC software
    </Text>
  </Slide>
)
