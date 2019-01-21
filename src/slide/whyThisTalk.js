import React from 'react'
import { Slide, Heading, List, ListItem } from 'spectacle'

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
      <ListItem>Struggling with abstraction is a daily adventure</ListItem>
      <ListItem>The more I share them the more I understand them</ListItem>
      <ListItem>The more I'm able to simply them</ListItem>
      <ListItem>The more I'm able to write good code</ListItem>
      <ListItem>Share your abstractions! Share your code!</ListItem>
    </List>
  </Slide>
)
