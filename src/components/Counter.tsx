import React from 'react';
import { CounterBtn, CounterContainer } from './CommonStyles';

type Props = {
  count: number;
  onClickInc: (e: React.MouseEvent<HTMLElement>) => void;
  onClickDec: (e: React.MouseEvent<HTMLElement>) => void;
};
const Counter = ({ onClickInc, onClickDec, count = 1 }: Props) => {
  return (
    <CounterContainer>
      <CounterBtn onClick={onClickDec}>-</CounterBtn>
      <div>{count}</div>
      <CounterBtn onClick={onClickInc}>+</CounterBtn>
    </CounterContainer>
  );
};

export default Counter;
