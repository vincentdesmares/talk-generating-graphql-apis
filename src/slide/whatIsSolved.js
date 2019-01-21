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
      GSG FEATURES
    </Heading>
    <List>
      <ListItem>Configurable models access</ListItem>
      <ListItem>All CRUD operations</ListItem>
      <ListItem>Before/after hooks on all CRUD operations.</ListItem>
      <ListItem>Subscriptions</ListItem>
      <ListItem>Custom fields & mutations</ListItem>
    </List>
  </Slide>
)
