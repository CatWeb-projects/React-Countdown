import React from 'react';
import { TimerContext } from '../../../contexts/Context';
import { Button } from '../../atoms';

import './AddTime.scss';

export const AddTime = () => {
  const { timeValue, setTimeValue, onTimerClick } =
    React.useContext(TimerContext);

  const onTimeChange = (e: { target: { value: string } }) => {
    setTimeValue(e.target.value);
  };

  return (
    <div className="add-time">
      <h6>Countdown:</h6>
      <input
        type="text"
        placeholder="(Min)"
        value={timeValue}
        onChange={onTimeChange}
      />
      <Button onClick={() => onTimerClick()}>Start</Button>
    </div>
  );
};
