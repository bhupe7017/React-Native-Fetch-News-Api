import React from 'react'

import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'

import News from './Screen/News'


const stackNavigator = createStackNavigator({
  NewsRed: News
})

const App = createAppContainer(stackNavigator)
export default App



  