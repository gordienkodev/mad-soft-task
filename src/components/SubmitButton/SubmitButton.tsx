import { Button, ConfigProvider } from 'antd';

interface SubmitButtonProps {
  onClick: () => void;
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({ onClick }) => {
  return (
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
      <Button variant="solid" onClick={onClick}>
        Ответить
      </Button>
    </ConfigProvider>
  );
};
