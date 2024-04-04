import Lupa from '../../assets/logoBusqueda'
import CloseIcon from '../../assets/logoclose'
import MaximiIcon from '../../assets/logomaximize'
import MinimizeIcon from '../../assets/logominimize'
import { appWindow } from '@tauri-apps/api/window'

import styles from './titlebar.module.css'

function TitleBar() {
    const minimize = () => appWindow.minimize()
    const maximize = () =>  appWindow.toggleMaximize()
    const close = () => appWindow.close()
  return (
    <header className={styles.header} id="header" >
      <button className="flex gap-2 items-center justify-center">
        <Lupa className="w-3 select-none"/> 
        <p className="select-none">Contab2</p>
      </button>  
      <section className=" h-full w-36 absolute grid grid-cols-3 right-0">
        <button className=" grid items-center justify-center" onClick={minimize}><MinimizeIcon className=" w-[9px]"/></button>
        <button className=" grid items-center justify-center" onClick={maximize}><MaximiIcon className=" w-[9px]"/></button>
        <button className=" grid items-center justify-center" onClick={close}><CloseIcon className=" w-[9px]"/></button>
      </section>
    </header>
  )
}
export default TitleBar