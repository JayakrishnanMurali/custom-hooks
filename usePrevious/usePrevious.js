import { useState, useEffect, useRef } from "react";
// Usage
function App() {
  const [count, setCount] = useState(0);
  const prevCount = usePrevious(count);
  return (
    <div>
      <h1>
        Now: {count}, before: {prevCount}
      </h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
// Hook
function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}
