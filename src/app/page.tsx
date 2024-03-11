"use client"
import {increment, decrement} from '../lib/features/counter/counterSlice';
import {useAppDispatch, useAppSelector} from '../lib/hooks';
import { RootState } from '../lib/store';

export default function Home() {
  
  const count = useAppSelector((state: RootState) => 
    state.counter.count
  );
  const dispatch = useAppDispatch();

  return (
    <>
      <h1>Home</h1>
      <button onClick={()=>dispatch(decrement())}>decrement</button>
      <span>{count}</span>
      <button onClick={()=>dispatch(increment())}>increment</button>
    </>
  );
}
