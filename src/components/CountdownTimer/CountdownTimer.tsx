import { Statistic } from 'antd';
import type { CountdownProps } from 'antd';
import './CountdownTimer.css';

const { Countdown } = Statistic;

interface CountdownTimerProps {
  deadline: number;
  onFinish: CountdownProps['onFinish'];
}

export const CountdownTimer = ({ deadline, onFinish }: CountdownTimerProps) => {
  return <Countdown className="timer" format="mm:ss" value={deadline} onFinish={onFinish} />;
};
