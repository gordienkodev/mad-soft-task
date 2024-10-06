import { useEffect, useState } from 'react';

type QuestionType = 'single-choice';

interface BaseQuestion {
  id: string;
  type: QuestionType;
  question: string;
  options: string[];
  correctAnswer: string;
}

interface Test {
  id: string;
  title: string;
  timeLimit: number;
  questions: BaseQuestion[];
}

interface TestDataLoaderProps {
  onDataLoad: (data: Test | null) => void;
}

export const TestDataLoader = ({ onDataLoad }: TestDataLoaderProps) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('./data.json');
        const data = await response.json();
        onDataLoad(data);
      } catch (error) {
        console.error('Ошибка при загрузке данных теста:', error);
        onDataLoad(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [onDataLoad]);

  if (loading) {
    return <div>Загрузка теста...</div>;
  }

  return null;
};
