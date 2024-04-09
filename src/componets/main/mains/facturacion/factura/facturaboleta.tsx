import { useEffect, useState } from 'react'
import './styles.css'
import MenorIcon from '../productos/menor'
import generarFecha from './fecha'
interface Producto {
    id: number;
    title: string;
    cantidad: number;
    price: number;
  }
  
  interface FacturaBoletaProps {
    state: Producto[];
  }

function FacturaBoleta({state}:FacturaBoletaProps){
    const [comprobante, setComprobante] =useState("FACTURA DE VENTA")
    const [on, setOn]= useState(false)
    const [date, setDate] = useState({minDate:'', maxDate:''})
    const [fecha, setFecha] = useState('')

    useEffect(() => {
        const {minDate ,maxDate}= generarFecha()
        setDate({minDate:minDate, maxDate:maxDate})
    }, [])

    return(
        <main className=" overflow-hidden bg-[#F3F3F3] Pro-Light text-[#333333]">
            <article className=" w-full h-full overflow-auto flex flex-col pl-4 gap-1">
                <section className={(comprobante==='FACTURA DE VENTA')?'w-full h-24  flex justify-between relative bg-[#007acc]':'w-full h-24  flex justify-between relative bg-[#4caf50]'}>
                    <picture className=' w-auto h-24 flex select-none p-4'>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Coca-Cola_logo.svg/1024px-Coca-Cola_logo.svg.png" alt="" />
                    </picture>
                    <section className='min-w-36 w-full max-w-[250px] flex flex-col rounded-md'>
                        <div  className="  justify-center flex items-center rounded-md h-full ">
                            <span className={(comprobante==='FACTURA DE VENTA')?' text-white Pro-Bold text-xl w-full h-full flex items-center justify-center rounded-tl-md select-none':' text-white Pro-Bold text-xl w-full h-full flex items-center justify-center rounded-tl-md select-none'}>
                                {comprobante}
                            </span>
                            <button 
                            className='grid items-center justify-center w-4 h-full bg-[#333333] focus:text-white text-[#D2D2D2] hover:text-white select-none'
                            onClick={()=>{setOn(!on)}}
                            >
                                <MenorIcon className='w-4'  />
                            </button>        
                        </div>
                    </section>                
                    <ul className={on?'absolute w-40 h-20 bg-[#F3F3F3] right-0 top-24 flex flex-col rounded-md border border-[#c0c0c0] select-none':' hidden '}>
                        <button 
                            className='rounded-md h-full Pro-Light text-sm hover:bg-white select-none'
                            onClick={()=>{
                                setComprobante("FACTURA DE VENTA")
                                setOn(!on)
                            }}
                        >
                            FACTURA DE VENTA
                        </button>
                        <button 
                            className='rounded-md h-full Pro-Light text-sm hover:bg-white select-none'
                            onClick={()=>
                            {
                                setComprobante("BOLETA DE VENTA")
                                setOn(!on)
                            }}
                        >
                            BOLETA DE VENTA
                        </button>
                    </ul>
                </section>
                <article className='Pro-Light select-none text-sm  flex flex-col gap-1 pr-4'>
                    <div className=' h-6 flex items-center Pro-Bold pl-4'>COCA-COLA SERVICIOS DE PERU S.A </div> 
                    <div className=' h-6 flex items-center pl-4'>Av. República de Panamá Nro. 4050</div> 
                    <div className=' h-6 flex items-center pl-4'>Surquillo, Lima, Lima, Perú</div>    
                </article>
                <article className='w-full h-auto flex flex-col pr-4 gap-1'>
                    <div className=' flex w-full h-6 gap-1'>
                        <div className='w-full flex justify-between bg-white px-4 text-sm text-[#777777]'>
                            <div className='h-full flex  items-center text-clip overflow-hidden'>
                                Fecha de emision : 
                            </div>
                            <label 
                            htmlFor="fecha"
                            className=' select-none h-full'
                            >
                            <input 
                                type="date"  
                                min={date.minDate} 
                                max={date.maxDate}
                                required
                                className='select-none h-full'
                                defaultValue={date.maxDate}
                                onChange={(event)=>{setFecha(event.target.value)}}
                                />
                            </label>
                        </div>
                        <div className='w-full flex justify-between bg-white px-4 text-sm text-[#777777]'>
                            <div className='h-full flex  items-center text-clip overflow-hidden'>
                                Fecha de Vencimiento : 
                            </div>
                            <label 
                            htmlFor="fecha"
                            className=' select-none h-full'
                            >
                            <input 
                                type="date"  
                                min={date.maxDate} 
                                required
                                className='select-none h-full'
                                defaultValue={date.maxDate}
                                onChange={(event)=>{setFecha(event.target.value)}}
                                />
                            </label>
                        </div>
                    </div>
                    <div className=' flex w-full px-4 text-sm h-6 bg-white text-[#777777]'>
                        RUC:  AAAAAAAAAAAAAAAAAAAAAAAAA
                    </div>
                    <div className=' flex w-full px-4 text-sm h-6 bg-white text-[#777777]'>
                        {`Señor(es) AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA`}
                    </div>
                    <div className=' flex w-full px-4 text-sm h-6 bg-white text-[#777777]'>
                        Dirección: AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
                    </div>
                    <div className=' flex w-full px-4 text-sm h-6 bg-white text-[#777777]'> 
                        Tipo de moneda : SOL
                    </div>
                </article>
                <div>
                    {
                        state && (
                           state.map(state =>(<div key={state.id}>{state.title}</div>))
                        )
                    }
                    {
                        fecha
                    }
                </div>
            </article>
        </main>
    )
}
export default FacturaBoleta