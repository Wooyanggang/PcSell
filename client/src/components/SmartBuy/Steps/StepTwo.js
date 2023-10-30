import React, { useState } from 'react';
import { Col, InputNumber, Row, Slider, Space, Card } from 'antd';

const StepTwo = () => {
  const IntegerStep = () => {
    const [inputValue, setInputValue] = useState(1);
    const onChange = (newValue) => {
      setInputValue(newValue);
    };
    return (
      <Row>
        <Col span={12}>
          <Slider
            min={20}
            max={200}
            onChange={onChange}
            value={typeof inputValue === 'number' ? inputValue : 0}
          />
        </Col>
        <Col span={4}>
          <InputNumber
            min={20}
            max={200}
            style={{
              margin: '0 16px',
            }}
            value={inputValue}
            onChange={onChange}
          />
        </Col>
      </Row>
    );
  };

  const [inputValue, setInputValue] = useState(0);
  const onChange = (value) => {
    if (isNaN(value)) {
      return;
    }
    setInputValue(value);
  };
  return (
    <div>
      <Card title="예산"
        bordered={false}
        style={{
          position: 'absolute',
          top: '0',
          left: '0',
          width: '100%',
          height: '100%',
        }}>
      </Card>
      <div>
        <Space
          style={{
            marginTop: '10%',
            width: '50%',
          }}
          direction="vertical"
        >
          <IntegerStep />
        </Space>
      </div>
    </div>
  )
}
export default StepTwo
