import { Button, ConfigProvider, Flex, Radio, Space } from 'antd';
import type { RadioChangeEvent } from 'antd';
import { useState } from 'react';
import { CountdownTimer } from './CountdownTimer';
import { TestDataLoader } from './TestDataLoader';
import './TestComponent.css';

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
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const onFinish = () => {
    console.log('finished!');
  };

  const [value, setValue] = useState(1);

  const onChange = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < (data?.questions.length || 0) - 1) {
      const nextIndex = currentQuestionIndex + 1;
      setCurrentQuestionIndex(nextIndex);
    } else {
      setCurrentQuestionIndex(0);
    }
  };

  if (!data) {
    return <TestDataLoader onDataLoad={setData} />;
  }

  const question = data.questions[currentQuestionIndex];

  return (
    <>
      <Flex className="header-row" gap="middle" align="center" justify="start">
        <div>Тестирование</div>
        <CountdownTimer deadline={deadline} onFinish={onFinish} />
      </Flex>

      <Flex className="progress-row" gap="small" align="center" justify="space-between">
        {data.questions.map((_, index) => (
          <div
            key={index}
            className={`question-block ${
              index < currentQuestionIndex
                ? 'question-block-left'
                : index === currentQuestionIndex
                  ? 'question-block-active'
                  : 'question-block-right'
            }`}
          ></div>
        ))}
      </Flex>

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
          <Radio.Group onChange={onChange} value={value}>
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
          <Button variant="solid" onClick={handleNextQuestion} disabled={!value}>
            Ответить
          </Button>
        </ConfigProvider>
      </Flex>
    </>
  );
};
