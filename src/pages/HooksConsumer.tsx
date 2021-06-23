import React, { ChangeEvent, memo, useContext, useState } from 'react';
import useDispatch from '../hooks/useDispatch';
import Ctx from '../hooks/context';
import request from '../xhr';

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

const Header = function (props) {
  return (
    <div>
      用户名：{props.username || ''}
    </div>
  )
}

const Login = function (props) {
  const [form, setForm] = useState({});

  function onChange(evt: ChangeEvent<HTMLInputElement>) {
    setForm(state => ({
      ...state,
      [evt.target.id]: evt.target.value
    }))
  }

  async function handleLogin() {
    const res = await request({
      url: '/login',
      method: 'post',
      data: form,
    })
    console.log(res);
  }

  return (
    <div>
      <p>
        <label htmlFor="username">
          <span>用户名：</span>
          <input type="text" name="username" id="username" onChange={onChange} />
        </label>
      </p>
      <p>
        <label htmlFor="password">
          <span>密码：</span>
          <input type="password" name="password" id="password" onChange={onChange} />
        </label>
      </p>
      <p>
        <button onClick={handleLogin}>登录</button>
      </p>
    </div>
  )
}

const HooksConsumer = () => {
  const { initState, dispatch } = useContext(Ctx);
  return (
    <>
      <Header />
      <Login />
    </>
  )
}

export default HooksConsumer;
