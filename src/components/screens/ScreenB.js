import React, { useState } from "react";

function ScreenB() {
  const [count, setCount] = useState(0);
  console.log("asdasd");
  return (
    <div>
      <p>screen B : {count}</p>
      <span onClick={() => setCount(count + 1)}>plus</span>
    </div>
  );
}

export default ScreenB;
