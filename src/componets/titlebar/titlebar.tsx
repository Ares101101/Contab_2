import Lupa from '../../assets/logoBusqueda'
import CloseIcon from '../../assets/logoclose'
import MaximiIcon from '../../assets/logomaximize'
import MinimizeIcon from '../../assets/logominimize'
import Logo from '../../assets/logo'
import { appWindow } from '@tauri-apps/api/window'
import { useState } from 'react'
import NavFacturacion from './navFacturacion'

function TitleBar({funct}:{funct:() => void}) {
    const [sect, setSect] = useState(false)
    function onSect() {
      if (!sect)return setSect(true)
      else return setSect(false)
    }
    const minimize = () => appWindow.minimize()
    const maximize = () => appWindow.toggleMaximize()
    const close = () => appWindow.close()
  return (
    <header data-tauri-drag-region className="h-full relative headerTitle flex items-center justify-center Pro-Light bg-zinc-50 border-b z-10">
      <nav className="flex h-9 justify-start items-center  text-[#222222] p-0 m-0 absolute left-0">
        <nav   className=" select-none p-2">
          <Logo className=" min-h-4 min-w-4" />
        </nav>
        <a
          className="cursor-pointer px-2 hover:bg-[#EBEBEB] rounded-md h-6 grid items-center" 
          onClick={onSect}
        >
          <p className="Pro-Light  select-none text-sm relative ">Facturacion</p>
        </a>
        <a className="cursor-pointer px-2 hover:bg-[#EBEBEB] rounded-md h-6 grid items-center">
          <p className="Pro-Light  select-none text-sm ">Almacen</p>
        </a>
        <a className="cursor-pointer px-2 hover:bg-[#EBEBEB] rounded-md h-6 grid items-center ">
          <p className="Pro-Light  select-none text-sm ">Registros</p>
        </a>
        <a className="cursor-pointer px-2 hover:bg-[#EBEBEB] rounded-md h-6 grid items-center ">
          <p className="Pro-Light  select-none text-sm ">Graficos</p>
        </a>
        <a className="cursor-pointer px-2 hover:bg-[#EBEBEB] rounded-md h-6 grid items-center ">
          <p className="Pro-Light  select-none text-sm ">Ayuda</p>
        </a>
      </nav>
      <button className="Pro-Light  select-none text-sm border h-7 hover:bg-[#EBEBEB] rounded-md px-2 min-w-64 w-full max-w-96 justify-center items-center flex gap-2">
        <Lupa className="w-3 select-none"/> 
        <p className="select-none">Contab 2</p>
      </button>  
      <section className=" h-full w-36 absolute grid grid-cols-3 right-0">
        <button className=" grid items-center justify-center hover:bg-[#EBEBEB]" onClick={minimize}><MinimizeIcon className=" w-[9px]"/></button>
        <button className=" grid items-center justify-center hover:bg-[#EBEBEB]" onClick={maximize}><MaximiIcon className=" w-[9px]"/></button>
        <button className=" grid items-center justify-center hover:bg-red-600 hover:text-white" onClick={close}><CloseIcon className=" w-[9px]"/></button>
      </section>
      {sect && <NavFacturacion funct={funct} onSect={onSect} />}
    </header>
  ) 
}
export default TitleBar