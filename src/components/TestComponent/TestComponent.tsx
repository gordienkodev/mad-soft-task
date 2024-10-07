import { Flex } from 'antd';
import { useState } from 'react';
import { CountdownTimer } from '../CountdownTimer/CountdownTimer';
import { TestDataLoader } from '../TestDataLoader';
import { CurrentQuestion } from '../CurrentQuestion/CurrentQuestion';
import { ProgressBar } from '../ProgressBar/ProgressBar';

const deadline = Date.now() + 1000 * 60 * 20;

type QuestionType = 'single-choice' | 'multiple-choice';

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
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: string]: string | string[] }>({});

  const onFinish = () => {
    console.log('finished!');
  };

  const onChange = (value: string | string[]) => {
    const questionId = data?.questions[currentQuestionIndex].id;
    if (questionId) {
      setSelectedAnswers((prev) => ({
        ...prev,
        [questionId]: value,
      }));
      console.log('Selected answers:', { ...selectedAnswers, [questionId]: value });
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < (data?.questions.length || 0) - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setCurrentQuestionIndex(0);
    }
  };

  const handleDataLoad = (loadedData: Test | null) => {
    setData(loadedData);
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
  };

  return (
    <>
      {!data ? (
        <TestDataLoader onDataLoad={handleDataLoad} />
      ) : (
        <>
          <Flex className="header-row" gap="middle" align="center" justify="start">
            <div>Тестирование</div>
            <CountdownTimer deadline={deadline} onFinish={onFinish} />
          </Flex>

          <ProgressBar questions={data.questions} currentQuestionIndex={currentQuestionIndex} />

          <CurrentQuestion
            question={data.questions[currentQuestionIndex]}
            value={(selectedAnswers[data.questions[currentQuestionIndex].id] as string[]) ?? []}
            onChange={onChange} 
            handleNextQuestion={handleNextQuestion}
          />
        </>
      )}
    </>
  );
};
