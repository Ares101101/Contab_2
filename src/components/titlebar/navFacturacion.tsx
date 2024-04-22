function NavFacturacion({ funct, onSect}:{funct:()=>void; onSect: ()=>void}) {
  function OnFunct() {
    funct()
    onSect()
  }
  return (
      <section className=" w-80 absolute top-8 left-1  border border-[#c0c0c0] bg-[#F6F6F6] rounded-md z-10">
        <nav className="p-2 w-full">
          <a
            className="Pro-Light  select-none text-sm  hover:bg-[#0576b8ff] hover:text-[#F6F6F6] w-full grid h-6 items-center pl-2  rounded-md"
            onClick={OnFunct}
          >
            Emitir Comprobante de Venta
          </a>
          <a className="Pro-Light  select-none text-sm  hover:bg-[#0576b8ff] hover:text-[#F6F6F6] w-full grid h-6 items-center pl-2  rounded-md">
            Generar compras formato libro
          </a>
          <a className="Pro-Light  select-none text-sm  hover:bg-[#0576b8ff] hover:text-[#F6F6F6] w-full grid h-6 items-center pl-2  rounded-md">
            Generar compras impresion hoja suelta
          </a>
        </nav>
      </section>
  )
}

export default NavFacturacion
