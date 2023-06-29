import React, { useState } from "react";

function ScreenA() {
  const [count, setCount] = useState(0);
  console.log("asdasd");
  return (
    <div>
      <p>screen A : {count}</p>
      <span onClick={() => setCount(count + 1)}>plus</span>
    </div>
  );
}

export default ScreenA;
