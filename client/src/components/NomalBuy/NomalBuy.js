import React from 'react'
import { Spin, Tooltip } from 'antd'
import EasyPcLogo from '../../img/EasyPcLogo.png'

const NomalBuy = () => {
  return (
    <div style={{ marginLeft: '5%', width: '100%', height: '500px', position: 'fixed', top: '30%', left: '30%' }}>
      <Tooltip title={<a href='/'
        style={{
          backgroundImage: `url(${EasyPcLogo})`,
          width: '500px',
          height: '500px',
          backgroundSize: '50%',
          backgroundRepeat: 'no-repeat',
          position: 'absolute',
          left: '0',
        }}>
      </a>}>
        <Spin />준비중입니다.
      </Tooltip>
    </div>
  )
}

export default NomalBuy
