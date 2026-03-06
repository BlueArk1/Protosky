import React from 'react'
import {View, StyleSheet} from 'react-native'
import {Logotype} from '#/view/icons/Logotype'

export function SplashLogo() {
  return (
    <div style={flatten([a.relative, {width: size, height: size * ratio, top: -50}])}>
      <img
        src="/assets/icons/logomark.svg"
        alt="Protosky"
        style={{width: '100%', height: '100%'}}
      />
    </div>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default SplashLogo
