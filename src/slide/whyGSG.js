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
      <ListItem>
        <b>Writing resolvers</b> quickly feels <b>repetitive</b>
      </ListItem>
      <ListItem>
        CRUD Operations are a <b>"solved"</b> problem
      </ListItem>
      <ListItem>
        <b>graphql-sequelize</b> only generate the R
      </ListItem>
      <ListItem>
        Did not find any re-usable <b>mutations CUD</b>
      </ListItem>
      <ListItem>
        The <b>ORM</b> represents most of the "schema"
      </ListItem>
    </List>
  </Slide>
)
