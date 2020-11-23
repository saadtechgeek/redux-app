import React from 'react';
import { useSelector } from 'react-redux';

export default function CounterOutput() {
  //useSelector says meghey function pass karo, usse mian state laker donga.! state will tell kunsa part, kunse slize state k cheyey.
  const counter = useSelector((state) => state.counter);

  return <>Counter Value: {counter}</>;
}
