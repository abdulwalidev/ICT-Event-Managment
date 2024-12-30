import React from 'react'; // Ensure React is imported
import ReactDOM from 'react-dom/client'; // Correct import for React 18
import App from './App'; // Import the App component
import './index.css'; // Import the CSS file (make sure it's linked correctly)

const rootElement = document.getElementById('root');

// Create a root element and render the app using createRoot
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
