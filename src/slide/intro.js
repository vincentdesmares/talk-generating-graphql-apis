import React from 'react'
import { Heading, Slide, Text, Notes } from 'spectacle'

export default (
  <Slide
    transition={['fade']}
    bgColor="white"
    progressColor="black"
    controlColor="black"
  >
    <Notes>
      <p>ASK QUESTION ABOUT SERVER SIDE CODE</p>
      <p>
        Due to the graph behavior of graphQ, writting server side code for a
        GraphQL schema can be more tedious than for a basic REST API
      </p>
      <p>
        {' '}
        In the talk, through the story of graphql-sequelize-generator, we will
        see what challenges you could face, and some thumb rules to deal with
        them.
      </p>
      <p>No need to be JS/Node/Express expert.</p>
      <p>
        <li>
          <ul>1) Server side GraphQL VS REST</ul>
          <ul>2) What GSG solves</ul>
          <ul>3) What is still up to you</ul>
          <ul>4) New trends & conclusion</ul>
        </li>
      </p>
    </Notes>
    <Heading size={1} caps fit textColor="black">
      GENERATING
    </Heading>
    <Heading size={1} caps fit textColor="black">
      GRAPHQL APIS
    </Heading>
    <div style={{ height: 50 }}> </div>
    <Text textColor="pink" fit bold>
      Quick and efficient dev
    </Text>
    <div style={{ height: 50 }}> </div>
    <Text textColor="blue" fit bold>
      with graphql-sequelize-generator
    </Text>
    <img
      src="assets/images/logo-cut.svg"
      alt="Teamstarter logo"
      style={{
        position: 'fixed',
        top: -100,
        right: -100,
        width: '50%',
        zIndex: '-1',
        opacity: '0.2'
      }}
    />
  </Slide>
)
