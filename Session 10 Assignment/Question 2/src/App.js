import { useEffect, useRef, useState } from "react";
export default function App() {

  const [count, setCount] = useState(0);
  const firstUpdate = useRef(true);
  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    console.log(count);
  });

  const increment=() => {
    setCount((count) => count + 1);
  }
  return (
    <div>
      <p>{count}</p>
      <button
        onClick={increment}
      >
       Increment
      </button>
     
    </div>
  );
}