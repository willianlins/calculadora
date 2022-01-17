import { Btn as Button } from "./components/Btn";
import { Display } from "./components/Display";

import "./styles/global.css";

function App() {
  return (
    <>
      <Button numberOrSymbol="3" />
      <Display number="33"/>
    </>
  );
}

export default App;
