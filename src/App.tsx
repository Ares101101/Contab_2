import { useState } from "react";
import "./App.css";
import TitleBar from "./componets/titlebar/titlebar";

function App() {
  const [compConc, compConcSect] = useState(false)
  function onComp() {
    if (!compConc) return compConcSect(true)
    else return compConcSect(false)
  }
  return (
    <div className="App text-[#222222]" >
      <TitleBar funct={onComp}/>
    </div>
  );
}

export default App;
