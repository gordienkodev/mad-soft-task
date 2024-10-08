import React, { useEffect, useState } from 'react';
import { Flex } from 'antd';
import { SubmitButton } from '../SubmitButton/SubmitButton';
import { SingleChoiceQuestion } from '../Questions/SingleChoiceQuestion';
import { MultipleChoiceQuestion } from '../Questions/MultipleChoiceQuestion';
import { ShortAnswerQuestion } from '../Questions/ShortAnswerQuestion';
import { LongAnswerQuestion } from '../Questions/LongAnswerQuestion';
import { loadAnswerById, saveAnswerToStorage } from '../../utils/answerStorageService';
import './CurrentQuestion.css';
import Title from 'antd/es/typography/Title';

interface CurrentQuestionProps {
  question: {
    id: string;
    type: 'single-choice' | 'multiple-choice' | 'short-answer' | 'long-answer';
    question: string;
    options?: string[];
  };
  value: string | string[]; 
  onChange: (value: string | string[]) => void;
  handleNextQuestion: () => void;
}

export const CurrentQuestion: React.FC<CurrentQuestionProps> = ({
  question,
  handleNextQuestion,
}) => {
  const [localValue, setLocalValue] = useState<string | string[]>(
    question.type === 'multiple-choice' ? [] : '',
  );

  useEffect(() => {
    const storedAnswer = loadAnswerById(question.id);
    if (storedAnswer) {
      const parsedAnswer =
        question.type === 'multiple-choice' ? JSON.parse(storedAnswer.answer) : storedAnswer.answer;
      setLocalValue(parsedAnswer);
    } else {
      setLocalValue(question.type === 'multiple-choice' ? [] : '');
    }
  }, [question.id, question.type]);

  const handleSaveAnswer = () => {
    const answerString = Array.isArray(localValue) ? JSON.stringify(localValue) : localValue;
    saveAnswerToStorage({
      id: question.id,
      type: question.type,
      answer: answerString,
    });
    handleNextQuestion();
  };

  const renderQuestion = () => {
    switch (question.type) {
      case 'single-choice':
        return (
          <SingleChoiceQuestion
            question={question}
            value={localValue as string}
            onChange={(selectedValue) => setLocalValue(selectedValue)}
          />
        );
      case 'multiple-choice':
        return (
          <MultipleChoiceQuestion
            question={question}
            value={localValue as string[]}
            onChange={(selectedValues) => setLocalValue(selectedValues)}
          />
        );
      case 'short-answer':
        return (
          <ShortAnswerQuestion
            question={question}
            value={localValue as string}
            onChange={(answer) => setLocalValue(answer)}
          />
        );
      case 'long-answer':
        return (
          <LongAnswerQuestion
            question={question}
            value={localValue as string}
            onChange={(answer) => setLocalValue(answer)}
          />
        );
      default:
        return null;
    }
  };

  return (
    <Flex className="qa-row" gap="middle" align="start" justify="start" vertical key={question.id}>
      <Title level={3}>{renderQuestion()}</Title>
      <SubmitButton onClick={handleSaveAnswer} />
    </Flex>
  );
};
