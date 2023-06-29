import React, { useState } from "react";

function ScreenD() {
  const [count, setCount] = useState(0);
  console.log("asdasd");
  return (
    <div>
      <p>screen D : {count}</p>
      <span onClick={() => setCount(count + 1)}>plus</span>
    </div>
  );
}

export default ScreenD;
