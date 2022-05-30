import React, { useState, useEffect } from "react";
// Usage
function App() {
  const [data] = useFetch("https://animechan.vercel.app/api/random");
  return (
    <div>
      <h1>Quote of the day:</h1>
      <p>{data}</p>
    </div>
  );
}

// Hook
const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [url]);

  return [data];
};
