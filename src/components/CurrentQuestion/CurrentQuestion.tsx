import { Button, ConfigProvider, Radio, Space } from 'antd';
import type { RadioChangeEvent } from 'antd';
import { Flex } from 'antd';
import './CurrentQuestion.css';

interface CurrentQuestionProps {
  question: {
    id: string;
    question: string;
    options: string[];
  };
  value: any;
  onChange: (e: RadioChangeEvent) => void;
  handleNextQuestion: () => void;
}

export const CurrentQuestion: React.FC<CurrentQuestionProps> = ({
  question,
  value,
  onChange,
  handleNextQuestion,
}) => {
  return (
    <Flex className="qa-row" gap="middle" align="start" justify="start" vertical key={question.id}>
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
        <Radio.Group onChange={onChange} value={value}>
          <Space direction="vertical">
            {question.options.map((option, index) => (
              <Radio key={index} value={option}>
                {option}
              </Radio>
            ))}
          </Space>
        </Radio.Group>
      </ConfigProvider>

      <ConfigProvider
        theme={{
          components: {
            Button: {
              colorBgContainer: '#B92A35',
              colorText: '#fff',
              colorPrimaryTextHover: '#ffffff',
              colorPrimaryHover: '#ffffff',
              colorPrimaryBorderHover: '#ffffff',
              colorPrimaryActive: '#B92A35',
            },
          },
        }}
      >
        <Button variant="solid" onClick={handleNextQuestion} disabled={!value}>
          Ответить
        </Button>
      </ConfigProvider>
    </Flex>
  );
};
