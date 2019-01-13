import React from 'react'
import { Heading, Slide, Text, Notes } from 'spectacle'

export default (
  <Slide
    transition={['fade']}
    bgColor="white"
    progressColor="black"
    controlColor="black"
  >
    <Notes>
      <p>I'm happy to be there to share my experience</p>
      <p>4 parts, 3 Axis</p>
      <ol>
        <li>Me & the product</li>
        <li>on the Tech</li>
        <li>on the design</li>
        <li>the Soft skills</li>
      </ol>
    </Notes>
    <Heading size={1} caps fit textColor="black">
      GENERATED
    </Heading>
    <Heading size={1} caps fit textColor="black">
      GRAPHQL API
    </Heading>
    <div style={{ height: 50 }}> </div>
    <Text textColor="pink" fit bold>
      Quick and efficient dev
    </Text>
    <div style={{ height: 50 }}> </div>
    <Text textColor="blue" fit>
      from my work on Teamstarter
    </Text>
    <img
      src="assets/images/logo-cut.svg"
      alt="Teamstarter logo"
      style={{
        position: 'fixed',
        top: -100,
        right: -100,
        width: '50%',
        zIndex: '-1',
        opacity: '0.2'
      }}
    />
  </Slide>
)
