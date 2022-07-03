import {React,useState} from 'react'
import { Box } from '@mui/material'

import Exercises from '../components/Exercises'
import SearchExercises from '../components/SearchExercies'
import HeroBanner from '../components/HeroBanner'
const Home = () => {
  return (
    <Box>
      <HeroBanner/>
      <SearchExercises/>
      <Exercises/>
      </Box>
  )
}

export default Home