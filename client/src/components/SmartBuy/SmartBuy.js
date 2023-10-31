import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Steps, theme } from 'antd';
import StepOne from './Steps/StepOne';
import StepTwo from './Steps/StepTwo';
import StepThree from './Steps/StepThree'


const SmartBuy = () => {
  const steps = [
    {
      title: '용도',
      content: <StepOne />
    },
    {
      title: '예산',
      content: <StepTwo />
    },
    {
      title: '추가구성',
      content: <StepThree />,
    },
  ];


  const navigate = useNavigate();
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };
  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));
  const contentStyle = {
    position: 'relative',
    width: '90%',
    height: '60Vh',
    textAlign: 'center',
    color: token.colorTextTertiary,
    backgroundColor: '#fff',
    borderRadius: token.borderRadiusLG,
    border: `1px dashed ${token.colorBorder}`,
    margin: '10px 5%',
  };
  return (
    <>
      <Steps current={current} items={items} style={{ margin: '10px 5% 0', width: '90%' }} />
      <div style={contentStyle}>{steps[current].content}</div>
      <div
        style={{
          position: 'relative',
          height: '1px',
          marginTop: 24,
        }}
      >
        {current < steps.length - 1 && (
          <Button type="primary"
            style={{
              position: 'absolute',
              margin: '0 5%',
              top: '-20px',
              right: '0'
            }}
            onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary"
            style={{
              position: 'absolute',
              margin: '0 5%',
              top: '-20px',
              right: '0'
            }}
            onClick={() => navigate('Result/')}>
            Done
          </Button>
        )}
        {current > 0 && (
          <Button
            style={{
              position: 'absolute',
              top: '-20px',
              right: '15%'
            }}
            onClick={() => prev()}
          >
            Previous
          </Button>
        )}
      </div>
    </>
  );
}
export default SmartBuy
