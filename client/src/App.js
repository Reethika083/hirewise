import React, { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000')
      .then((res) => res.text())
      .then((data) => {
        setMessage(data);
      })
      .catch((err) => {
        console.error('Failed to fetch:', err);
        setMessage('Error connecting to backend');
      });
  }, []);

  return (
    <div>
      <h1>Frontend is working!</h1>
      <p>Message from backend: {message}</p>
    </div>
  );
}

export default App;
