import EasyPcLogo from '../../img/EasyPcLogo.png'

import React from 'react'

const Logo = () => {
  return (
    <a href='/'
      style={{
        backgroundImage: `url(${EasyPcLogo})`,
        width: '170px',
        height: '128px',
        backgroundSize: '50%',
        backgroundRepeat: 'no-repeat',
        position: 'absolute',
        left: '0',
      }}>
    </a>
  )
}

export default Logo
