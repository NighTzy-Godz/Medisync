import { useState } from "react";
import { Button } from "./components/ui/button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="">
      <Button onClick={() => setCount(count + 1)}>Click Me</Button>
      <h1>Welcome</h1>
      <p className=" text-3xl">Current Count: {count}</p>
    </div>
  );
}

export default App;
