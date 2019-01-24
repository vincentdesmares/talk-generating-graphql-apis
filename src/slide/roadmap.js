import React from 'react'
import { Slide, Heading, List, ListItem, Notes } from 'spectacle'

export default (
  <Slide
    transition={['zoom']}
    bgColor="white"
    progressColor="black"
    controlColor="black"
  >
    <Notes>
      <p>Use it, we are here to support you.</p>
    </Notes>
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
