import React, { useState, useEffect } from 'react'
import { Card, List, Button } from 'antd';

const data = [];

const SmartBuyResult = () => {

  // const navigate = useNavigate();
  const [Mode, setMode] = useState([])
  const [listName, setlistName] = useState('내 견적')
  const [price, setprice] = useState(null)
  const firstList = [['GPU', 'i5-13400F'], ['MainBoard', 'B660'], ['GPU', 'RTX 3050'], ['RAM', 'DDR4 8GB * 2']]
  const secondList = [['GPU', 'i3-13100'], ['MainBoard', 'H61'], ['RAM', 'DDR4 8GB']]

  function handleSelectFirst(props) {
    setMode(firstList)
    setlistName('추천 견적')
    setprice(513200)
  }

  function handleSelectSecond() {
    setMode(secondList)
    setlistName('최소 견적')
    setprice(300000)

  }
  return (
    <div style={{
      position: 'relative',
      width: '90%',
      height: '500px',
      textAlign: 'center',
      margin: '10px 5%',
    }}>
      <Card title="생성된 견적" bordered={false}
        style={{
          position: 'relative',
          width: '30%',
          height: '100%',
          display: '',
        }}>
        <Button
          style={{
            margin: '5px auto',
            display: 'block',
          }}
          type="primary"
          onClick={handleSelectFirst}
          key={firstList}>
          추천 견적
        </Button>
        <Button style={{
          margin: '5px auto',
          display: 'block',
        }}
          onClick={handleSelectSecond}
          value={secondList}>
          최소 견적
        </Button>
      </Card>
      {/* 장바구니 설정 */}
      <List
        style={{
          width: '50%',
          position: 'absolute',
          top: '0',
          right: '0'
        }}
        header={<div>{listName}</div>}
        footer={price && <div style={{ textAlign: 'center' }}>{price} 원</div>}
        bordered
        dataSource={Mode}
        renderItem={(item) => (
          <List.Item>
            {item[0]}: {item[1]}
          </List.Item>
        )}
      />
      <Button style={{ position: 'absolute', right: '5%', Button: '40%' }}>장바구니에 담기</Button>

    </div >
  )
}

export default SmartBuyResult
