import React from 'react'
import { Text, View, AppRegistry } from 'react-native'
import Header from './src/components/header'
import AlbumList from './src/components/album-list'

const App = () => (
  <View>
    <Header />
    <AlbumList />
  </View>
)

AppRegistry.registerComponent('albums', () => App)
