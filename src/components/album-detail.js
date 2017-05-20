import React, { Component } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import Card from './card'
import CardSection from './card-section'
import Button from './button'

const AlbumDetail = (props) => {
  const {
    title,
    artist,
    image,
    thumbnail_image
  } = props.config
  const {
    thumbnail,
    headerContent,
    headerText,
    thumbnailContainer,
    imageStyle
  } = styles
  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainer}>
          <Image
            style={thumbnail}
            source={{ uri: thumbnail_image }}
          />
        </View>
        <View style={headerContent}>
          <Text style={headerText}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image
          style={imageStyle}
          source={{ uri: image }}
        />
      </CardSection>
      <CardSection>
        <Button />
      </CardSection>
    </Card>
  )
}

const styles = StyleSheet.create({
  headerContent: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  headerText: {
    fontSize: 18
  },
  thumbnail: {
    height: 50,
    width: 50,
  },
  thumbnailContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
});

export default AlbumDetail
