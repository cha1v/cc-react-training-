
import React from "react";
import {useState,useEffect} from 'react';
function Ex() {
    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
  
    useEffect(() => {
   <h1> `You clicked ${count} times`</h1>;
   console.log(count);
    });

    useEffect(() => {
      <h1> `You clicked ${count1} times`</h1>;
     console.log(count1);
   },[count1,count]);

    useEffect(() => {
        <h1> `You clicked ${count2} times`</h1>;
        console.log(count2);
     },[]);


    return (
      <div>
        <h3>You clicked {count} times</h3>
        <p>(case1:without dependency array)</p>
        <button onClick={() => setCount(count + 1)}>  Click me </button>
        <h3>You clicked {count1} times</h3>
        <p>(case2:with array dependency)</p>
        <button onClick={() => setCount1(count1 + 1)}>  Click me1 </button>
        <h3>You clicked {count2} times </h3>
        <p>(case3:empty array)</p>
        <button onClick={() => setCount2(count2 + 1)}>  Click me2 </button>
  
      </div>
    );
  }

  export default Ex;