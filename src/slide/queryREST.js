import React from 'react'
import { Heading, Slide, Notes, Image, Text } from 'spectacle'

export default (
  <Slide
    transition={['fade']}
    bgColor="white"
    textColor="black"
    progressColor="black"
    controlColor="black"
  >
    <Notes>
      <p>Only on type of entity</p>
    </Notes>
    <Heading size={6} textColor="pink" caps fit>
      A REST Query
    </Heading>
    <Text style={{ margin: 20 }} bold textColor="black">
      /api/category/2/items
    </Text>
    <Image src="/assets/images/rest.png" />
  </Slide>
)
