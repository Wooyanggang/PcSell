import React from 'react'
import { Checkbox } from 'antd'

const StepThree = () => {
  const addon = ['모니터', '모니터암', '책상', '마우스', '빔 프로젝터',]
  return (
    <div style={{
      textAlign: 'left',
      marginLeft: '5%',
    }}>
      {addon.map((e, index, arr) => {
        return (
          <React.Fragment key={index}>
            <p>
              <Checkbox>{e}</Checkbox>
            </p>
          </React.Fragment>
        )
      })}
    </div>
  )
}

export default StepThree
