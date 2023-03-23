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
      <div className="header">
        <h1>GOT SPORK?</h1>
        <div className="connect-button">
          <ConnectButton />
        </div>
      </div>

      <div className="content">
        {isLoading ? (
          <div className="loading">Loading...</div>
        ) : (
          <>
            {isConnected ? (
              <Attestooooooor />
            ) : (
              <div className="connect-wallet">
                Please connect your wallet to proceed
              </div>
            )}
          </>
        )}
      </div>

      <div className="footer">
        © 2023 GOT SPORK? built by 0xwaya.&nbsp;
        <a href="https://github.com/0xwaya/opatts">opatts</a>.
      </div>
    </main>
  );
}