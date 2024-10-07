import { Flex } from 'antd';
import './CurrentQuestion.css';
import { SubmitButton } from '../SubmitButton/SubmitButton';
import { SingleChoiceQuestion } from '../Questions/SingleChoiceQuestion';
import { MultipleChoiceQuestion } from '../Questions/MultipleChoiceQuestion';
import { ShortAnswerQuestion } from '../Questions/ShortAnswerQuestion';
import { LongAnswerQuestion } from '../Questions/LongAnswerQuestion';

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
  value,
  onChange,
  handleNextQuestion,
}) => {
  const renderQuestion = () => {
    switch (question.type) {
      case 'single-choice':
        return (
          <SingleChoiceQuestion
            question={question}
            value={value as string}
            onChange={(selectedValue) => onChange(selectedValue)}
          />
        );
      case 'multiple-choice':
        return (
          <MultipleChoiceQuestion
            question={question}
            value={value as string[]}
            onChange={(selectedValues) => onChange(selectedValues)}
          />
        );
      case 'short-answer':
        return (
          <ShortAnswerQuestion
            question={question}
            value={value as string}
            onChange={(answer) => onChange(answer)}
          />
        );
      case 'long-answer':
        return (
          <LongAnswerQuestion
            question={question}
            value={value as string}
            onChange={(answer) => onChange(answer)}
          />
        );
      default:
        return null;
    }
  };

  return (
    <Flex className="qa-row" gap="middle" align="start" justify="start" vertical key={question.id}>
      {renderQuestion()}
      <SubmitButton onClick={handleNextQuestion} />
    </Flex>
  );
};
