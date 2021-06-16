import React, { FC, memo, useContext, useMemo, useState } from 'react';
import useDispatch from '../hooks/useDispatch';
import { AnyAction } from 'redux';
import Ctx from '../hooks/context';

const NestedConsumer = memo(function NestedConsumer () {
  // const { initState, dispatch } = useContext(Ctx);
  const dispatch = useDispatch();
  return (
    <>
      <h1>NestedConsumer</h1>
      {/* <div>{initState.count}</div> */}
      <button onClick={() => dispatch({ type: 'PLUS', payload: 1 })}>plus</button>
      <button onClick={() => dispatch({ type: 'MINUS', payload: 1 })}>minus</button>
    </>
  )
})
const HooksConsumer = () => {
  const { initState, dispatch } = useContext(Ctx);
  return (
    <>
      <div>{initState.count}</div>
      <button onClick={() => dispatch({ type: 'PLUS', payload: 1 })}>
        plus
      </button>
      <button onClick={() => dispatch({ type: 'MINUS', payload: 1 })}>
        minus
      </button>
      <NestedConsumer />
    </>
  )
}

export default HooksConsumer;
