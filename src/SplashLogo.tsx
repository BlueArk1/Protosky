import React from 'react'
import {View, StyleSheet} from 'react-native'
import {Logotype} from '#/view/icons/Logotype'

export function SplashLogo() {
  return (
    <View style={styles.container}>
      <Logotype fill="#fff" width={100} />
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
