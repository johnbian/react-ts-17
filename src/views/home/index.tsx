import React, { useEffect } from 'react';
import logo from './logo.svg';
import './index.scss';
import { Button } from 'antd-mobile';
import { userApi } from '../../api'

function Home() {
  useEffect(() => {
    async function fetchData() {
      // You can await here
      const response = await userApi.getAgentInfo('01b4')
      // ...
    }
    fetchData();
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Button>antd button</Button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Home;
