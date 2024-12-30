import React from 'react';
import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import './App.css';
import awsExports from './aws-exports';
Amplify.configure(awsExports);

export default function App() {
  // Function to redirect to the Host Event page
  const redirectToHostEvent = () => {
    window.location.href = '/host-event'; // Redirects to the Host Event page
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: 'black',
      fontFamily: 'Arial, sans-serif',
      color: '#333',
    }}>
      <Authenticator>
        {({ signOut, user }) => (
          <main style={{
            textAlign: 'center',
            background: '#fff',
            padding: '2rem',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          }}>
            <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Welcome To Your Profile</h1>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <button
                onClick={redirectToHostEvent}
                style={{
                  padding: '10px 20px',
                  fontSize: '1rem',
                  color: '#fff',
                  backgroundColor: '#007BFF',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s ease',
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#0056b3'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#007BFF'}
              >
                Go to Host Event
              </button>
              <button
                onClick={signOut}
                style={{
                  padding: '10px 20px',
                  fontSize: '1rem',
                  color: '#fff',
                  backgroundColor: '#dc3545',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s ease',
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#a71d2a'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#dc3545'}
              >
                Sign Out
              </button>
            </div>
          </main>
        )}
      </Authenticator>
    </div>
  );
}
