import React, { useState } from 'react';
import { Button, Steps, theme } from 'antd';
import { useNavigate } from 'react-router-dom';
import StepOne from './Steps/StepOne';
import StepTwo from './Steps/StepTwo';
import StepThree from './Steps/StepThree'



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


const BuyStep = () => {
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
          marginTop: 24,
        }}
      >
        {current < steps.length - 1 && (
          <Button type="primary"
            style={{
              margin: '0 5%',
            }}
            onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary"
            style={{
              margin: '0 5%',
            }}
            onClick={() => navigate('/SmartBuy/Result/')}>
            Done
          </Button>
        )}
        {current > 0 && (
          <Button
            style={{
              margin: '0 '
            }}
            onClick={() => prev()}
          >
            Previous
          </Button>
        )}
      </div>
    </>
  );
};
export default BuyStep;