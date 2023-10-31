import React from 'react'
import { Spin, Tooltip } from 'antd'
import EasyPcLogo from '../../img/EasyPcLogo.png'

const NomalBuy = () => {
  return (
    <div style={{ margin: '50% 50%', width: '100%', height: '100%', position: 'relative' }}>
      <Tooltip title={<a href='/PcSell/'
        style={{
          backgroundImage: `url(${EasyPcLogo})`,
          width: '300px',
          height: '180px',
          backgroundSize: 'auto',
          backgroundRepeat: 'no-repeat',
          position: 'absolute',
        }}>
      </a>}>
        <Spin />준비중입니다.
      </Tooltip>
    </div>
  )
}

export default NomalBuy
