import React, { useState } from "react";
function Count() {
  const [count, setCount] = useState(0);
  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "lightblue",
        alignContent: "center",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>THIS IS COUNTER COMPONENT</h1>
      <br />
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Count;
