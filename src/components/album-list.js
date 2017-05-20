import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import AlbumDetail from './album-detail'

class AlbumList extends Component {
  constructor(props) {
    super(props)
    this.state = { albums: [] }
  }
  componentWillMount () {
    fetch('https://rallycoding.herokuapp.com/api/music_albums')
      .then((response) => response.json())
      .then((data) => this.setState({ albums: data }))
  }
  renderAlbums () {
    return this.state.albums.map(
      (album) => <AlbumDetail key={album.title} config={album} />
    )
  }
  render () {
    return (
      <ScrollView>
        { this.renderAlbums() }
      </ScrollView>
    )
  }
}

export default AlbumList
