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
      <ListItem>Define "Types" (item, category, file, etc...)</ListItem>
      <ListItem>Compose "fields" based on those Types</ListItem>
      <ListItem>Implement a "Resolver" per type</ListItem>
      <ListItem>Compose basic Types and their resolvers</ListItem>
    </List>
  </Slide>
)
