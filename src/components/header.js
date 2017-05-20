import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Header = (props) =>
  <View style={styles.viewStyle}>
    <Text style={styles.textSyle}>{props.headerText}</Text>
  </View>

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: .2,
    elevation: 2,
    position: 'relative'
  },
  textSyle: {
    fontSize: 20,
  }
});

export default Header;
