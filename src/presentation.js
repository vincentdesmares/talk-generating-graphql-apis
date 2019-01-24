import React from 'react'
import { Deck } from 'spectacle'

import createTheme from 'spectacle/lib/themes/default'
import Intro from './slide/intro'
import 'tachyons/css/tachyons.min.css'
import Questions from './slide/questions'
import Me from './slide/me'
import WhatIsTeamstarter from './slide/whatIsTeamstarter'
import sectionRestVSGraphQL from './slide/sectionRestVSGraphQL'
import sectionGSGSolves from './slide/sectionGSGSolves'
import sectionGSGDoesNotSolves from './slide/sectionGSGDoesNotSolves'
import demo from './slide/demo'
import queryREST from './slide/queryREST'
import queryGraphQL from './slide/queryGraphQL'
import serverSide from './slide/serverSide'
import whyGSG from './slide/whyGSG'
import whatIsSolved from './slide/whatIsSolved'
import toTheInfinite from './slide/toTheInfinite'
import nQueries from './slide/nQueries'
import roadmap from './slide/roadmap'
import generation from './slide/generation'
import whyThisTalk from './slide/whyThisTalk'
import niceToHave from './slide/niceToHave'

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
        {sectionRestVSGraphQL}
        {queryREST}
        {queryGraphQL}
        {serverSide}
        {whyGSG}
        {sectionGSGSolves}
        {whatIsSolved}
        {demo}
        {niceToHave}
        {sectionGSGDoesNotSolves}
        {toTheInfinite}
        {nQueries}
        {roadmap}
        {generation}
        {whyThisTalk}
        {Questions}
      </Deck>
    )
  }
}
