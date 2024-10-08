import { Checkbox, ConfigProvider, Space } from 'antd';

interface MultipleChoiceQuestionProps {
  question: {
    question: string;
    options?: string[];
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
    onChange(checkedValues as string[]);
  };

  return (
    <>
      <div>{question.question}</div>
      <ConfigProvider
        theme={{
          components: {
            Checkbox: {
              colorBorder: '#000',
              colorPrimary: '#B92A35',
              colorBgContainer: '#fff',
            },
          },
        }}
      >
        <Checkbox.Group value={value} onChange={handleCheckboxChange}>
          <Space direction="vertical">
            {question.options?.map((option) => (
              <Checkbox key={option} value={option}>
                {option}
              </Checkbox>
            ))}
          </Space>
        </Checkbox.Group>
      </ConfigProvider>
    </>
  );
};
