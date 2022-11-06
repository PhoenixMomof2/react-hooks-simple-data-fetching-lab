import React, { useState, useEffect } from "react";

const App = () => {
  const baseUrl = "https://dog.ceo/api/breeds/image/random";
  const [message, setMessage] = useState(null);

  useEffect(() => {
    fetch(baseUrl)
      .then((res) => res.json())
      .then(data => setMessage(data.message));
  }, []);
  if(!message)return <p>Loading...</p>

  return (
    <div>        
      <img src={message} alt="A Random Dog" />
    </div>
  )
};

export default App;
