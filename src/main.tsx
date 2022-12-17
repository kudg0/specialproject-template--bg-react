import React from 'react';
import ReactDOM from 'react-dom/client';

import App from '/src/react/components/App/App';
import '/src/styles/index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className='specialContainer'>
      <App />
    </div>
  </React.StrictMode>,
)
