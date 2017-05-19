import React, { Component } from 'react'
import { View, Text } from 'react-native'

const AlbumDetail = (props) => (
  <View>
    <Text>{props.config.title}</Text>
  </View>
)

export default AlbumDetail
