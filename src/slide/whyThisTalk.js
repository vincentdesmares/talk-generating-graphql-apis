import React from 'react'
import { Slide, Heading, List, ListItem, Text } from 'spectacle'

export default (
  <Slide
    transition={['zoom']}
    bgColor="yellow"
    progressColor="black"
    controlColor="black"
  >
    <Heading fit textColor="purple" caps>
      Why did I made this talk
    </Heading>
    <List>
      <ListItem>Struggling with abstraction is normal</ListItem>
      <ListItem>The more I share the more I understand</ListItem>
      <ListItem>The more I'm able to simplify them</ListItem>
      <ListItem>The more I'm able to write good code</ListItem>
    </List>
    <Text bold fit caps>
      Share your abstractions!
    </Text>
  </Slide>
)
