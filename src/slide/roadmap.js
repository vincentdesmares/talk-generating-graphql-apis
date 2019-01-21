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
      ROADMAP
    </Heading>
    <List>
      <ListItem>Deprecated field</ListItem>
      <ListItem>Configurable cache</ListItem>
      <ListItem>Better integration with dataloader</ListItem>
      <ListItem>graphql-typeorm-generator</ListItem>
    </List>
  </Slide>
)
