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
      Avoiding N queries
    </Heading>
    <List>
      <ListItem>Facebook dataloader</ListItem>
      <ListItem>sequelize-dataloader</ListItem>
      <ListItem>Avoid rights checks for sub-items</ListItem>
    </List>
  </Slide>
)
