import React, { useState } from 'react'
import { Select, Card, Checkbox, Input } from 'antd'


const StepOne = () => {
  const [Usage, setUsage] = useState([])
  const [ReuseItem, setReuseItem] = useState([['CPU', false], ['GPU', false], ['RAM', false], ['MainBoard', false], ['Storage', false]])

  const onSelect = (value) => {
    if (!Usage.includes(value))
      setUsage([...Usage, value])
  };

  const onChecked = (e) => {
    ReuseItem[e.target.index][1] = !ReuseItem[e.target.index][1]
    setReuseItem([...ReuseItem])
  }

  return (
    <div style={{
      position: 'relative',
      width: '90%',
      height: '100%',
    }}>
      < Select
        style={{
          position: 'absolute',
          width: '30%',
          height: '30px',
          top: '15%',
          left: '10%',
        }}
        showSearch
        placeholder="용도를 선택해주세요."
        onChange={onSelect}
        options={
          [
            {
              value: 'photoshop',
              label: 'photoshop',
            },
            {
              value: 'LoL',
              label: 'LoL',
            },
            {
              value: 'afterEffects',
              label: 'AfterEffects',
            },
            {
              value: 'web',
              label: 'web',
            },
          ]}
      />

      <Card title="선택한 목록"
        bordered={false}
        style={{
          position: 'absolute',
          top: '50%',
          width: '50%',
          height: '50%',
        }}>
        {Usage.map((e, index) => (
          <div key={index}>{e}</div>
        ))}
      </Card>
      <Card title="재활용할 부품"
        bordered={false}
        style={{
          position: 'absolute',
          top: '5%',
          right: '0',
          width: '50%',
          height: '95%',
        }}>
        <div style={{
          textAlign: 'left'
        }}>
          {ReuseItem.map((e, index, arr) => {
            return (
              <React.Fragment key={index}>
                <p>
                  <Checkbox onChange={onChecked} reuse={e} index={index}>{e}</Checkbox>
                  {arr[index][1] && <Input placeholder="재사용할 부품명" />}
                </p>
              </React.Fragment>
            )
          })}
        </div>
      </Card >
    </div >
  )
}

export default StepOne
