import React, { Component } from 'react'
import { Text } from 'react-native'
import Card from './card'

const AlbumDetail = (props) => {
  return (
    <Card>
      <Text>{props.config.title}</Text>
    </Card>
  )
}

export default AlbumDetail
