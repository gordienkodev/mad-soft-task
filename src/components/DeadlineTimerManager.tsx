import { useEffect } from 'react';

interface DeadlineTimerManagerProps {
  timeLimit: number;
  onDeadlineCalculated: (deadline: number) => void;
}

export const DeadlineTimerManager: React.FC<DeadlineTimerManagerProps> = ({
  timeLimit,
  onDeadlineCalculated,
}) => {

  const saveDeadline = (deadline: number) => {
    localStorage.setItem('testDeadline', deadline.toString());
  };

  const loadDeadline = (): number | null => {
    const savedDeadline = localStorage.getItem('testDeadline');
    if (savedDeadline) {
      return Number(savedDeadline);
    }
    return null;
  };

  useEffect(() => {
    const savedDeadline = loadDeadline();

    if (savedDeadline && savedDeadline > Date.now()) {
      onDeadlineCalculated(savedDeadline);
    } else {
      const newDeadline = Date.now() + timeLimit;
      saveDeadline(newDeadline);
      onDeadlineCalculated(newDeadline);
    }
  }, [timeLimit, onDeadlineCalculated]);

  return null;
};
