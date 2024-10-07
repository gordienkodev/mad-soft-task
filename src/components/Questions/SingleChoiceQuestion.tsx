import { ConfigProvider, Radio, Space } from 'antd';
import { RadioChangeEvent } from 'antd/es/radio';

interface SingleChoiceQuestionProps {
  question: {
    question: string;
    options: string[];
  };
  value: string;
  onChange: (value: string) => void;
}

export const SingleChoiceQuestion: React.FC<SingleChoiceQuestionProps> = ({
  question,
  value,
  onChange,
}) => {
  const handleChange = (e: RadioChangeEvent) => {
    onChange(e.target.value);
  };

  return (
    <>
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
        <Radio.Group onChange={handleChange} value={value}>
          <Space direction="vertical">
            {question.options.map((option, index) => (
              <Radio key={index} value={option}>
                {option}
              </Radio>
            ))}
          </Space>
        </Radio.Group>
      </ConfigProvider>
    </>
  );
};
