import React from 'react'
import { Heading, Slide, Text, Notes, List, ListItem } from 'spectacle'

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
    <Heading size={1} caps lineHeight={1} textColor="pink">
      How GraphQL work server side?
    </Heading>
    <Text>Define a schema (Fields + type)</Text>
    <Text margin="10px 0 0" textColor="black" size={0.5}>
      <List>
        <ListItem>Root "Field"</ListItem>
      </List>
    </Text>
    <Text bold fit>
      Implement a "Resolver" per type + default resolvers
    </Text>
  </Slide>
)
