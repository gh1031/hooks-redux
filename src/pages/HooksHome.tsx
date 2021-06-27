import React, { FC, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import useDispatch from '../hooks/useDispatch';
import { useSelector } from '../hooks/useSelector';

export const Header = function (props) {
  const userInfo = useSelector(state => state.userInfo)
  return (
    <div>
      欢迎：{userInfo.username || ''}
    </div>
  )
}

const PlusComp = () => {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();
  return (
    <div>
      <div>PlusComp count: { count }</div>
      <button onClick={() => dispatch({ type: 'PLUS', payload: 1 })}>plus</button>
    </div>
  )
}
const MinusComp = () => {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();
  return (
    <div>
      <div>MinusComp  count: { count }</div>
      <button onClick={() => dispatch({ type: 'PLUS', payload: 1 })}>minus</button>
    </div>
  )
}

const HooksHome = () => {
  const userInfo = useSelector(state => state.userInfo);

  const history = useHistory();
  useEffect(() => {
    if (!userInfo.username) {
      history.push('/login')
    }
  }, [])
  return (
    <div>
      <Header />
      <PlusComp />
      <MinusComp />
    </div>
  )
}

export default HooksHome;
