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
            <article className=" pl-4 comprobante overflow-hidden  bg-[#F3F3F3] Pro-Light text-[#333333] flex flex-col Factura gap-1">
                <section className='w-full h-24  flex justify-between relative bg-white'>
                    <picture className=' w-auto h-24 flex select-none p-4'>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Coca-Cola_logo.svg/1024px-Coca-Cola_logo.svg.png" alt="" />
                    </picture>
                    <section className='min-w-36 w-full max-w-[250px] flex flex-col rounded-md'>
                        <div  className="  justify-center flex items-center rounded-md h-full ">
                            <span className={(comprobante==='FACTURA DE VENTA')?' text-[#007acc] Pro-Bold text-xl w-full h-full flex items-center justify-center rounded-tl-md select-none':' text-[#4caf50]  Pro-Bold text-xl w-full h-full flex items-center justify-center rounded-tl-md select-none'}>
                                {comprobante}
                            </span>
                            <button 
                            className={(comprobante==='FACTURA DE VENTA')?'grid items-center justify-center w-4 h-full bg-[#007acc] focus:text-white text-[#D2D2D2] hover:text-white select-none':'grid items-center justify-center w-4 h-full bg-[#4caf50] focus:text-white text-[#D2D2D2] hover:text-white select-none'}
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
                        <div className='w-1/2  flex justify-between bg-white px-4 text-sm text-[#777777]'>
                            <div className='h-full flex  overflow-hidden text-ellipsis items-center truncate'>
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
                        <div className='w-1/2  flex justify-between bg-white px-4 text-sm text-[#777777] overflow-hidden'>
                            <div className='h-full flex  overflow-hidden text-ellipsis items-center truncate'>
                                Fecha de vencimiento : 
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
                <article className={'Pro-Light  select-none text-sm  flex gap-1 pr-4 '}>
                    <div className={' h-6 flex items-center text-white justify-center w-1/12 overflow-hidden truncate '+`${(comprobante==='FACTURA DE VENTA')?"bg-[#007acc]":"bg-[#4caf50] "}`}>ID</div>
                    <div className={' h-6 flex items-center text-white justify-center w-6/12 overflow-hidden truncate '+`${(comprobante==='FACTURA DE VENTA')?"bg-[#007acc]":"bg-[#4caf50] "}`}>NOMBRE</div> 
                    <div className={' h-6 flex items-center text-white justify-center  w-1/12 overflow-hidden truncate '+`${(comprobante==='FACTURA DE VENTA')?"bg-[#007acc]":"bg-[#4caf50] "}`}>CANTIDAD</div>
                    <div className={' h-6 flex items-center  text-white justify-center  w-2/12 overflow-hidden truncate '+`${(comprobante==='FACTURA DE VENTA')?"bg-[#007acc]":"bg-[#4caf50] "}`}>PRECIO-U</div>
                    <div className={' h-6 flex items-center text-white justify-center  w-2/12 overflow-hidden truncate '+`${(comprobante==='FACTURA DE VENTA')?"bg-[#007acc]":"bg-[#4caf50] "}`}>PRECIO-T</div>

                </article>
                <div className=' pr-4 w-full flex flex-col gap-1  overflow-y-auto  max-h-56 arti'>
                    {
                        state && (  
                           state.map(state =>(
                           <div 
                            key={state.id}
                            className=' flex gap-1 Pro-Light text-sm '
                           >
                            <div className='h-6 flex items-cente justify-center w-1/12 overflow-hidden truncate  bg-white px-4'>
                                {state.id}
                            </div>
                            <div className='h-6 flex items-cente justify-initial w-6/12 overflow-hidden truncate  bg-white px-4'>
                                {state.title}
                            </div> 
                            <div className='h-6 flex items-cente justify-center w-1/12 overflow-hidden truncate  bg-white px-4'>
                                {state.cantidad}
                            </div> 
                            <div className='h-6 flex items-cente justify-center w-2/12 overflow-hidden truncate  bg-white px-4'>
                                {state.price.toFixed(2)}
                            </div> 
                            <div className='h-6 flex items-cente justify-center w-2/12 overflow-hidden truncate  bg-white px-4'>
                                {
                                    (state.price *state.cantidad).toFixed(2)
                                }
                            </div>   
                           </div>   
                        ))
                        )
                    }
                </div>
                <div className=' pr-4 h-6 flex gap-1 Pro-Light select-none text-sm'>
                    <div className={' h-6 flex items-center text-white justify-center  w-10/12 overflow-hidden truncate '+`${(comprobante==='FACTURA DE VENTA')?"bg-[#007acc]":"bg-[#4caf50] "}`}>
                            TOTAL 
                    </div>
                    <div className={' h-6 flex items-center text-white justify-center  w-2/12 overflow-hidden truncate '+`${(comprobante==='FACTURA DE VENTA')?"bg-[#007acc]":"bg-[#4caf50] "}`}>
                    {
                        state[0]?.cantidad !== undefined 
                        ? state.reduce((total, producto) => total + producto.price, 0)
                        : 0
                    }
                    </div>
                </div>
            </article>
    )
}
export default FacturaBoleta