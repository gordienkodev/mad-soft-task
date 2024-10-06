import { Flex } from 'antd';
import type { RadioChangeEvent } from 'antd';
import { useState } from 'react';
import { CountdownTimer } from '../CountdownTimer/CountdownTimer';
import { TestDataLoader } from '../TestDataLoader';
import { CurrentQuestion } from '../CurrentQuestion/CurrentQuestion';
import { ProgressBar } from '../ProgressBar/ProgressBar';
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

      <ProgressBar questions={data.questions} currentQuestionIndex={currentQuestionIndex} />

      <CurrentQuestion
        question={question}
        value={value}
        onChange={onChange}
        handleNextQuestion={handleNextQuestion}
      />
    </>
  );
};
