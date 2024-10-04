import { Button, ConfigProvider, Flex, Radio, Space, Statistic } from 'antd';
import './TestComponent.css';
import type { CountdownProps, RadioChangeEvent } from 'antd';
import { useState } from 'react';

const { Countdown } = Statistic;
const deadline = Date.now() + 1000 * 60 * 20;

export const TestComponent = () => {
  const onFinish: CountdownProps['onFinish'] = () => {
    console.log('finished!');
  };

  let currentQuestion = 2;

  const [value, setValue] = useState(1);

  const onChange = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  return (
    <>
      <Flex className="header-row" gap="middle" align="center" justify="start">
        <div>Тестирование</div>
        <Countdown className="timer" format="mm:ss" value={deadline} onFinish={onFinish} />
      </Flex>

      <Flex className="progress-row" gap="middle" align="center" justify="space-between">
        <div
          key={0}
          className={`question-block ${
            1 < currentQuestion
              ? 'question-block-left'
              : 1 === currentQuestion
                ? 'question-block-active'
                : 'question-block-right'
          }`}
        ></div>
        <div
          key={1}
          className={`question-block ${
            1 < currentQuestion
              ? 'question-block-left'
              : 1 === currentQuestion
                ? 'question-block-active'
                : 'question-block-right'
          }`}
        ></div>
        <div
          key={2}
          className={`question-block ${
            2 < currentQuestion
              ? 'question-block-left'
              : 2 === currentQuestion
                ? 'question-block-active'
                : 'question-block-right'
          }`}
        ></div>
        <div
          key={3}
          className={`question-block ${
            3 < currentQuestion
              ? 'question-block-left'
              : 3 === currentQuestion
                ? 'question-block-active'
                : 'question-block-right'
          }`}
        ></div>
        <div
          key={4}
          className={`question-block ${
            4 < currentQuestion
              ? 'question-block-left'
              : 4 === currentQuestion
                ? 'question-block-active'
                : 'question-block-right'
          }`}
        ></div>
      </Flex>

      <Flex className="qa-row" gap="middle" align="start" justify="start" vertical>
        <div>Что должен знать?</div>
        <ConfigProvider
          theme={{
            components: {
              Radio: {
                colorBorder: '#000',
                colorPrimary: '#B92A35',
                colorBgContainer: '#fff',
                dotSize: 0,
              },
            },
          }}
        >
          <Radio.Group onChange={onChange} value={value}>
            <Space direction="vertical">
              <Radio value={1}>HTML</Radio>
              <Radio value={2}>PHP</Radio>
              <Radio value={3}>C</Radio>
              <Radio value={4}>Букварь</Radio>
            </Space>
          </Radio.Group>
        </ConfigProvider>
        <ConfigProvider
          theme={{
            components: {
              Button: {
                colorBgContainer: '#B92A35',
                colorText: '#fff',
                colorPrimaryTextHover: '#ffffff',
                colorPrimaryHover: '#ffffff',
                colorPrimaryBorderHover: '#ffffff',
                colorPrimaryActive: '#B92A35',
              },
            },
          }}
        >
          <Button variant="solid">Ответить</Button>
        </ConfigProvider>
      </Flex>
    </>
  );
};
