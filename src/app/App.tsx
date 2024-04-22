import { useEffect, useState } from "react";
import "../styles/App.css";
import TitleBar from "../components/titlebar/titlebar";
import Main from "../components/main/main/main";
import { appWindow } from "@tauri-apps/api/window";

function App() {

  const [compConc, compConcSect] = useState(false)
  const [isAppMaximized, setAppBorderRadius]= useState<boolean>(false)

  useEffect(()=>{
    console.log(isAppMaximized)
  },[isAppMaximized])
  
  appWindow.onResized( async ()=>{
    if(await appWindow.isMaximized()){
      setAppBorderRadius(true)
    }else{
      setAppBorderRadius(false)
    }
  })
  function onComp() {
    if (!compConc) return compConcSect(true)
    else return compConcSect(false)
  }
  return (
    <div className="App text-[#222222] overflow-hidden rounded-xl" >
      <TitleBar funct={onComp} />
      <Main/>
    </div>
  );
}

<style>

</style>

export default App;
  