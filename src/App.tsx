import { useState } from "react";
import "./App.css";
import TitleBar from "./componets/titlebar/titlebar";
import Main from "./componets/main/main/main";

function App() {
  const [compConc, compConcSect] = useState(false)
  function onComp() {
    if (!compConc) return compConcSect(true)
    else return compConcSect(false)
  }
  return (
    <div className="App text-[#222222] overflow-hidden" >
      <TitleBar funct={onComp}/>
      <Main/>
    </div>
  );
}

export default App;
  