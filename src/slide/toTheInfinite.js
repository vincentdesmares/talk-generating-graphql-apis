import React from 'react'
import { Slide, Heading, List, ListItem, Text } from 'spectacle'

export default (
  <Slide
    transition={['zoom']}
    bgColor="blue"
    progressColor="black"
    controlColor="black"
  >
    <Heading fit textColor="black" caps>
      TO THE INFINITE...
    </Heading>
    <Text fit bold textColor="purple">
      ... and beyond!
    </Text>
    <List>
      <ListItem>Dynamic quering makes life complicated</ListItem>
      <ListItem>Depth limitations</ListItem>
      <ListItem>Timing limitations</ListItem>
      <ListItem>Have performances in mind for *</ListItem>
    </List>
  </Slide>
)
