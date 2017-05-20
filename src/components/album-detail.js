import React, { Component } from 'react'
import { Text } from 'react-native'
import Card from './card'
import CardSection from './card-section'

const AlbumDetail = (props) =>
  <Card>
    <CardSection>
      <Text>{props.config.title}</Text>
    </CardSection>
  </Card>

export default AlbumDetail
