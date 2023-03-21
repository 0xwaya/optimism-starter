import { useEffect, useState } from 'react';
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";

import { Attestooooooor } from "./components";

export function App() {
  const { isConnected } = useAccount();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1 style={{ marginTop: 20 }}>GOT SPORK?</h1>

      <div style={{ marginTop: 40 }}>
        <ConnectButton />
      </div>

      {!isLoading && (
        <>
          <hr style={{ margin: '50px 0' }} />
          {isConnected && (
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
              <Attestooooooor />
            </div>
          )}
          {!isConnected && (
            <div style={{ marginTop: 20, fontStyle: 'italic' }}>
              Please connect your wallet to proceed
            </div>
          )}
          <hr style={{ margin: '50px 0' }} />
        </>
      )}
    </div>
  );
}