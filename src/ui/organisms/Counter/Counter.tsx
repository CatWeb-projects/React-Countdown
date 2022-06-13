import React from 'react';
import { TimerContext } from '../../../contexts/Context';
import { Button, Icon } from '../../atoms';

import './Counter.scss';

export const Counter = () => {
  const {
    seconds,
    setSeconds,
    minutes,
    setMinutes,
    counting,
    setCounting,
    onPause,
    saveTime
  } = React.useContext(TimerContext);

  const [speed, setSpeed] = React.useState<number>(1);
  const [totalSeconds, setTotalSeconds] = React.useState<number>(0);

  React.useEffect(() => {
    const interval = setInterval(
      () => {
        if (counting && minutes && minutes > 0 && seconds === 0) {
          setMinutes(minutes >= 1 ? minutes - 1 : 0);
          setSeconds(59);
          setTotalSeconds(minutes * 60);
        }
        if (counting && seconds !== 0) {
          setSeconds(seconds >= 1 ? seconds - 1 : 0);
          setTotalSeconds(totalSeconds >= 1 ? totalSeconds - 1 : 0);
        }
        seconds === 0 && minutes === 0 && setCounting(false);
      },
      speed === 3 ? 500 : speed === 2 ? 750 : 1000
    );

    return () => {
      clearInterval(interval);
    };
  }, [seconds, minutes, counting]);

  return (
    <div className="counter">
      {counting && totalSeconds && totalSeconds <= (saveTime * 60) / 2 ? (
        <span className="way">More than halfaway here!</span>
      ) : (
        minutes === 0 &&
        seconds === 0 && <span className="way">Time&apos;s up!</span>
      )}
      <div className="counter__time">
        <span
          className={
            minutes === 0 && seconds >= 1 && seconds < 11 ? 'blinking' : ''
          }
          style={minutes === 0 && seconds < 21 ? { color: 'red' } : {}}
        >
          {minutes && minutes < 10
            ? `0${minutes}`
            : !Number(minutes)
            ? '00'
            : minutes}
          :{seconds < 10 ? `0${seconds}` : !Number(seconds) ? '00' : seconds}
        </span>
        <Button
          disabled={counting === false}
          onClick={() => onPause()}
          type="icon"
        >
          {counting ? <Icon type="pause" /> : <Icon type="play" />}
        </Button>
      </div>
      <div className="counter__timespeed">
        <Button
          className={speed === 1 ? 'active' : ''}
          onClick={() => setSpeed(1)}
          type="black"
        >
          1X
        </Button>
        <Button
          className={speed === 2 ? 'active' : ''}
          onClick={() => setSpeed(2)}
          type="black"
        >
          1.5X
        </Button>
        <Button
          className={speed === 3 ? 'active' : ''}
          onClick={() => setSpeed(3)}
          type="black"
        >
          2X
        </Button>
      </div>
    </div>
  );
};
