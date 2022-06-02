import React from 'react';

interface ProviderProps {
  children: React.ReactNode;
}

interface Props {
  timeValue: string;
  seconds: number;
  minutes: number | undefined;
  counting: boolean;
  saveTime: number;
  setTimeValue: React.Dispatch<React.SetStateAction<string>>;
  setSeconds: React.Dispatch<React.SetStateAction<number>>;
  setMinutes: React.Dispatch<React.SetStateAction<number | undefined>>;
  setCounting: React.Dispatch<React.SetStateAction<boolean>>;
  onTimerClick: () => void;
  onPause: () => void;
  setSaveTime: React.Dispatch<React.SetStateAction<number>>;
}

const defaultValue = {
  timeValue: '',
  seconds: 0,
  minutes: 0,
  counting: false,
  saveTime: 0,
  setTimeValue: () => {},
  setSeconds: () => {},
  setMinutes: () => {},
  setCounting: () => {},
  onTimerClick: () => {},
  onPause: () => {},
  setSaveTime: () => {}
};

export const TimerContext = React.createContext<Props>(defaultValue);

export const ProviderContext = (props: ProviderProps) => {
  const [timeValue, setTimeValue] = React.useState<string>('');
  const [seconds, setSeconds] = React.useState<number>(0);
  const [minutes, setMinutes] = React.useState<number | undefined>(undefined);
  const [saveTime, setSaveTime] = React.useState<number>(0);
  const [counting, setCounting] = React.useState<boolean>(false);

  const onTimerClick = () => {
    const num = Number(parseInt(timeValue));
    setMinutes(num);
    setSaveTime(num);
    setSeconds(0);
    setCounting(true);
    setTimeValue('');
  };

  const onPause = () => {
    if (counting || minutes === undefined) {
      setCounting(false);
    } else {
      setCounting(true);
    }
  };

  const { children } = props;
  const values = {
    timeValue,
    setTimeValue,
    seconds,
    setSeconds,
    minutes,
    setMinutes,
    counting,
    setCounting,
    onTimerClick,
    onPause,
    saveTime,
    setSaveTime
  };

  return (
    // eslint-disable-next-line
    <TimerContext.Provider value={values}>{children}</TimerContext.Provider>
  );
};
