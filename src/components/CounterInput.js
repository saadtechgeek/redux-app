import React from 'react';
import { useDispatch } from 'react-redux';
import { decrementAction, incrementAction } from './Actions';

//dispatch function is a postman, send to reducer
export default function CounterInput() {
  const dispatch = useDispatch();
  return (
    <>
      <button onClick={() => dispatch(incrementAction())}>+</button>
      <button onClick={() => dispatch(decrementAction())}>-</button>
    </>
  );
}
