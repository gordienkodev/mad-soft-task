import { Input, Space } from 'antd';
import { useEffect, useState } from 'react';

interface ShortAnswerQuestionProps {
  question: {
    question: string;
  };
  value: string;
  onChange: (value: string) => void;
}

export const ShortAnswerQuestion: React.FC<ShortAnswerQuestionProps> = ({
  question,
  value,
  onChange,
}) => {
  const [answer, setAnswer] = useState(value);

  useEffect(() => {
    setAnswer(value);
  }, [value]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer(e.target.value);
    onChange(e.target.value);
  };

  return (
    <>
      <Space direction="vertical">
        <div>{question.question}</div>
        <Input
          type="text"
          value={answer}
          onChange={handleInputChange}
          placeholder="Введите ответ"
        />
      </Space>
    </>
  );
};
