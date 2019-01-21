import React from 'react'
import { Slide, Heading, List, ListItem } from 'spectacle'

export default (
  <Slide
    transition={['zoom']}
    bgColor="white"
    progressColor="black"
    controlColor="black"
  >
    <Heading fit textColor="purple" caps>
      NICE TO HAVE
    </Heading>
    <List>
      <ListItem>Field blacklist</ListItem>
      <ListItem>removeUnusedAttributes</ListItem>
      <ListItem>Count resolvers</ListItem>
      <ListItem>allow order on associations</ListItem>
    </List>
  </Slide>
)
