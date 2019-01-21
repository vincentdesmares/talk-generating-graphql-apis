import React from 'react'
import { Slide, Heading, List, ListItem } from 'spectacle'

export default (
  <Slide
    transition={['zoom']}
    bgColor="blue"
    progressColor="black"
    controlColor="black"
  >
    <Heading fit textColor="black" caps>
      Why DEVELOPING GSG?
    </Heading>
    <List>
      <ListItem>Writing resolvers quickly feels repetitive</ListItem>
      <ListItem>graphql-sequelize only generate the "list"</ListItem>
      <ListItem>CRUD Operations are a "solved" problem</ListItem>
      <ListItem>The ORM represents most of the "schema"</ListItem>
    </List>
  </Slide>
)
