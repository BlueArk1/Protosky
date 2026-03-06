import React from 'react'
import {View, StyleSheet} from 'react-native'
import {Logomark} from '#/view/icons/Logomark'

export function SplashLogo() {
  return (
    <View style={styles.container}>
      <Logomark fill="#fff" width={100} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default SplashLogo
