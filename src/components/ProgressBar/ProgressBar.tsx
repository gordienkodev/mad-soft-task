import { Flex } from 'antd';
import './ProgressBar.css';

interface ProgressBarProps {
  questions: { id: string }[];
  currentQuestionIndex: number;
}

export const ProgressBar = ({ questions, currentQuestionIndex }: ProgressBarProps) => {
  return (
    <Flex className="progress-row" gap="small" align="center" justify="space-between">
      {questions.map((_, index) => (
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
  );
};
