import { Button, ConfigProvider, Flex, Radio, Space, Statistic } from 'antd';
import './TestComponent.css';
import type { CountdownProps, RadioChangeEvent } from 'antd';
import { useEffect, useState } from 'react';

const { Countdown } = Statistic;
const deadline = Date.now() + 1000 * 60 * 20;

type QuestionType = 'single-choice';

interface BaseQuestion {
  id: string;
  type: QuestionType;
  question: string;
  options: string[];
  correctAnswer: string;
}

interface Test {
  id: string;
  title: string;
  timeLimit: number;
  questions: BaseQuestion[];
}

export const TestComponent = () => {
  const [data, setData] = useState<Test | null>(null);

  useEffect(() => {
    fetchData();
  }, []);

  const onFinish: CountdownProps['onFinish'] = () => {
    console.log('finished!');
  };

  let currentQuestion = 2;

  const [value, setValue] = useState(1);

  const onChange = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  const fetchData = async () => {
    try {
      const response = await fetch('./data.json');
      const data = await response.json();
      setData(data);
      console.log(data);
    } catch (error) {
      console.error('Ошибка при загрузке данных теста:', error);
    }
  };

  if (!data) {
    return <div>Загрузка теста...</div>;
  }

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

      {data.questions.map((question) => (
        <Flex
          className="qa-row"
          gap="middle"
          align="start"
          justify="start"
          vertical
          key={question.id}
        >
          <div>{question.question}</div>
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
            <Radio.Group>
              <Space direction="vertical">
                {question.options.map((option, index) => (
                  <Radio key={index} value={option}>
                    {option}
                  </Radio>
                ))}
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
      ))}
    </>
  );
};
