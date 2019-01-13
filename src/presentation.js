import React from 'react'
import { Deck } from 'spectacle'

import createTheme from 'spectacle/lib/themes/default'
import Intro from './slide/intro'
import 'tachyons/css/tachyons.min.css'
import Questions from './slide/questions'
import Me from './slide/me'
import WhatIsTeamstarter from './slide/whatIsTeamstarter'

require('normalize.css')

const theme = createTheme(
  {
    white: 'white',
    black: '#1F2022',
    pink: '#ff00ac',
    blue: '#00dade',
    yellow: '#ffe400',
    grey: '#888888'
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica'
  }
)

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={['fade']} transitionDuration={500} theme={theme}>
        {Intro}
        {Me}
        {WhatIsTeamstarter}
        {Questions}
      </Deck>
    )
  }
}
