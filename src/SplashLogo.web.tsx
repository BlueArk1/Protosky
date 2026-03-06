import React from 'react'
import {atoms as a, flatten} from '#/alf'

const size = 100
const ratio = 57 / 64

export function SplashLogo() {
  return (
    <div style={flatten([a.relative, {width: size, height: size * ratio, top: -50}])}>
      <img
        src="../assets/icons/logomark.svg"
        alt="Protosky"
        style={{width: '100%', height: '100%'}}
      />
    </div>
  )
}

export default SplashLogo
