import { useState } from "react";
import "../styles/App.css";
import TitleBar from "../components/titlebar/titlebar";
import Main from "../components/main/main/main";

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

<style>

</style>

export default App;
  