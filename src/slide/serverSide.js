import React from 'react'
import { Heading, Slide, Notes, List, ListItem } from 'spectacle'

export default (
  <Slide
    transition={['slide']}
    bgColor="white"
    progressColor="black"
    controlColor="black"
  >
    <Notes>
      <ul>
        <li>a</li>
      </ul>
    </Notes>
    <Heading bold size={1} caps lineHeight={1} textColor="pink">
      How GraphQL works server side?
    </Heading>
    <List>
      <ListItem>GraphQL is not just a RFC!</ListItem>
      <ListItem>Provide a "schema" to the server</ListItem>
      <ListItem>
        Define "Types" => <b>repetitive</b>
      </ListItem>
      <ListItem>
        Compose "fields" with Types => <b>tedious</b>
      </ListItem>
      <ListItem>
        Implement a "Resolver" per type => <b>boring</b>
      </ListItem>
      <ListItem>Mutations = Operations that mutates</ListItem>
    </List>
  </Slide>
)
