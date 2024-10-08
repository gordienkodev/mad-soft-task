import { Input, Space } from 'antd';
import { useEffect, useState } from 'react';

interface LongAnswerQuestionProps {
  question: {
    question: string;
  };
  value: string;
  onChange: (value: string) => void;
}

export const LongAnswerQuestion: React.FC<LongAnswerQuestionProps> = ({
  question,
  value,
  onChange,
}) => {
  const [answer, setAnswer] = useState(value);

  useEffect(() => {
    setAnswer(value);
  }, [value]);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setAnswer(e.target.value);
    onChange(e.target.value);
  };

  return (
    <Space direction="vertical">
      <div>{question.question}</div>
      <Input.TextArea
        value={answer}
        onChange={handleInputChange}
        placeholder="Введите ответ"
        rows={4}
      />
    </Space>
  );
};
