import { useEffect, useState } from 'react';
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import { Attestooooooor } from "./components";
import './App.css';

export function App() {
  const { isConnected } = useAccount();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <main className="App">
      <div className="App-header">
        <h1>GOT SPORK?</h1>
        <div className="App-connect">
          <ConnectButton />
        </div>
      </div>

      <div className="App-content">
        {isLoading ? (
          <div className="App-loading">Loading...</div>
        ) : (
          <>
            {isConnected ? (
              <Attestooooooor />
            ) : (
              <div className="App-connect">
                Please connect your wallet to proceed
              </div>
            )}
          </>
        )}
      </div>

      <div className="App-footer">
        © 2023 GOT SPORK? built by @0xwaya.&nbsp;
        <a href="https://github.com/0xwaya/opatts">gotSpork?</a>.
      </div>
    </main>
  );
}