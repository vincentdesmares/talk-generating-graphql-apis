import React from 'react'
import { Slide, Heading, List, ListItem } from 'spectacle'

export default (
  <Slide
    transition={['zoom']}
    bgColor="white"
    progressColor="black"
    controlColor="black"
  >
    <Heading fit textColor="pink" caps>
      OTHER TYPES OF GENERATION
    </Heading>
    <List>
      <ListItem>Generate TypeScript types from schema</ListItem>
      <ListItem>Generate Schema from TypeScript types</ListItem>
    </List>
  </Slide>
)
