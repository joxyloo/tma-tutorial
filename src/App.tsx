import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import WebApp from '@twa-dev/sdk';
import { TonConnectButton, TonConnectUIProvider, useTonAddress } from '@tonconnect/ui-react';

function App() {
  const [count, setCount] = useState(0);
  const userFriendlyAddress = useTonAddress();
  const rawAddress = useTonAddress(false);

  return (
    <TonConnectUIProvider manifestUrl='https://joxyloo.github.io/tma-tutorial/tonconnect-manifest.json'>
      <div>
        <TonConnectButton />
      </div>
      <div>
        <a href='https://vitejs.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite + React</h1>
      userFriendlyAddress && (
      <div>
        <span>User-friendly address: {userFriendlyAddress}</span>
        <span>Raw address: {rawAddress}</span>
      </div>
      )
      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <div className='card'>
        <button onClick={() => WebApp.showAlert(`Hello World! Current count is ${count}`)}>Show Alert</button>
      </div>
      <p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
    </TonConnectUIProvider>
  );
}

export default App;
