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
    <main style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      justifyContent: 'space-between',
      alignItems: 'stretch',
      background: 'linear-gradient(to bottom right, #333333, #555555)',
      color: 'white',
      padding: '1em',
      flex: '1 1 auto',
      maxWidth: '100%',

    }}>
      {/* Title and connect button container */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: 'linear-gradient(to bottom right, #333333, #555555)',
        color: 'white',
        padding: '1em',
        flex: '1 1 auto',
        maxWidth: '100%',
      }}>
        {/* Title */}
        <h1 style={{
          fontSize: '2em',
          fontWeight: 'bold',
          color: 'white',
          textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',

        }}>GOT SPORK?</h1>

        {/* Connect wallet button */}
        <div style={{ 
          display: 'flex',
          alignItems: 'center'
        }}>
          <ConnectButton style={{ margin: '20px 0', marginRight: '20px' , background: 'linear-gradient(to bottom right, #333333, #555555)', color: 'white', border: 'none', borderRadius: '10px', padding: '10px 20px', fontSize: '1em', fontWeight: 'bold', textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }} />  
        </div>
      </div>

      {/* Content container */}
      <div style={{
        background: 'linear-gradient(to bottom right, #888888, #cccccc)',
        color: 'white',
        padding: '1em',
        flex: '3 1 auto',
        maxWidth: '100%',

      }}>
        {isLoading ? (
          <div style={{
            fontSize: '2em',
            fontWeight: 'bold',
            color: 'white',
            textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            textAlign: 'center',
            marginTop: '20px',

          }}>Loading...</div>
        ) : (
          <>
            {isConnected ? (
              <Attestooooooor />
            ) : (
              <div style={{ marginTop: 20, fontStyle: 'italic', color: 'white' }}>
                Please connect your wallet to proceed
              </div>
            )}
          </>
        )}
      </div>

      {/* Footer */}
      <div style={{
        textAlign: 'center',
        background: 'linear-gradient(to bottom right, #333333, #555555)',
        color: 'white',
        fontSize: '14px',
        padding: '1em',
        flex: '1 1 auto',
        maxWidth: '100%',

      }}>
      <footer>
        <div style={{ textAlign: 'center', color: 'white', fontSize: '14px', padding: '1em', flex: '1 1 auto', maxWidth: '100%' }}>
          © 2023 GOT SPORK? built by 0xwaya.&nbsp;
          <a href="https://github.com/0xwaya/opatts">opatts</a>.
        </div>
      </footer>
  
      </div>
    </main>
  );
}