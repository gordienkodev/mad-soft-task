import { Checkbox } from 'antd';

interface MultipleChoiceQuestionProps {
  question: {
    question: string;
    options: string[];
  };
  value: string[];
  onChange: (value: string[]) => void;
}

export const MultipleChoiceQuestion: React.FC<MultipleChoiceQuestionProps> = ({
  question,
  value,
  onChange,
}) => {
  const handleCheckboxChange = (checkedValues: string[]) => {
    onChange(checkedValues);
  };

  return (
    <div>
      <h4>{question.question}</h4>
      <Checkbox.Group value={value} onChange={handleCheckboxChange}>
        {question.options.map((option) => (
          <Checkbox key={option} value={option}>
            {option}
          </Checkbox>
        ))}
      </Checkbox.Group>
    </div>
  );
};
