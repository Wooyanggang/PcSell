import React, { useNavigator } from 'react'
import MainImage from '../../img/MainImg.jpg'
import NavBar from '../NavBar/NavBar';
import { Card, Button } from 'antd';

const LandingPage = () => {
  return (
    <div style={{
      position: 'relative',
      margin: '10px 5%',
      width: '100%',
      height: '90vh'
    }}>
      <div style={{
        position: 'absolute',
        top: '-5%',
        fontSize: '20px',
        fontWeight: 'bold',
      }}>메인 페이지</div>
      <div style={{
        width: '70%',
        height: '100%',
        backgroundSize: 'cover',
        backgroundImage: `url(${MainImage})`,
      }}>
      </div>
      <Card title="쉬운 조립 컴퓨터!"
        bordered={true}
        style={{
          position: 'absolute',
          width: '20%',
          height: '100%',
          right: '10%',
          top: '0'
        }}>
        <p>용도,예산에 맞춘 자동 견적을 제공해드립니다!</p>
        <a href='/PcSell/SmartBuy/'>
          <Button style={{
            marginTop: '5px',
            display: 'block',
          }}>
            바로가기
          </Button>
        </a>
      </Card>
    </div>
  )
}

export default LandingPage
