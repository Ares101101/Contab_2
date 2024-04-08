import { useEffect, useState } from 'react'
import './styles.css'
import MenorIcon from '../productos/menor'
import generarFecha from './fecha'
function FacturaBoleta(){
    const [comprobante, setComprobante] =useState("FACTURA DE VENTA")
    const [on, setOn]= useState(false)
    const [date, setDate] = useState({minDate:'', maxDate:''})
    const [fecha, setFecha] = useState('')
    
    useEffect(() => {
        const {minDate ,maxDate}= generarFecha()
        setDate({minDate:minDate, maxDate:maxDate})
    }, [])

    return(
        <main className="pl-4 overflow-hidden bg-[#F3F3F3] Pro-Light text-[#333333]">
            <article className=" bg-white  w-full h-full p-8 overflow-auto flex flex-col gap-2">
                <section className="w-full h-24  flex justify-between relative">
                    <picture className=' w-auto h-24 flex select-none'>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Coca-Cola_logo.svg/1024px-Coca-Cola_logo.svg.png" alt="" />
                    </picture>
                    <section className='min-w-36 w-full max-w-[250px] flex flex-col rounded-md'>
                        <div  className="  justify-center flex items-center rounded-md h-full ">
                            <span className={(comprobante==='FACTURA DE VENTA')?'bg-[#0576b8ff] text-white Pro-Light text-sm w-full h-full flex items-center justify-center rounded-tl-md select-none':'bg-[#4caf50] text-white Pro-Light text-sm w-full h-full flex items-center justify-center rounded-tl-md select-none'}>
                                {comprobante}
                            </span>
                            <button 
                            className='grid items-center justify-center w-8 h-full bg-[#DDDDDD] hover:bg-[#D2D2D2] focus:bg-[#D2D2D2] text-[#333333] rounded-tr-md select-none'
                            onClick={()=>{setOn(!on)}}
                            >
                                <MenorIcon className='w-4'  />
                            </button>        
                        </div>
                        <div className='Pro-Light text-md w-full h-full flex items-center justify-center border-x border-[#DDDDDD] bg-[#F3F3F3] select-none '>
                            RUC : 10748425000
                        </div>
                        <div className='Pro-Light text-md w-full h-full flex items-center justify-center rounded-b-md border border-[#DDDDDD] bg-[#F3F3F3] select-none'>
                            {comprobante==='FACTURA DE VENTA'?'F001: 001':'B001: 0001'}
                        </div>
                    </section>                
                    <ul className={on?'absolute w-40 h-20 bg-[#F3F3F3] right-0 top-7 flex flex-col rounded-md border border-[#c0c0c0] select-none':' hidden '}>
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
                <article className='Pro-Light select-none text-md  flex flex-col h-24 '>
                    <div className=' h-full flex items-center'>COCA-COLA SERVICIOS DE PERU S.A </div> 
                    <div className=' h-full flex items-center'>Av. República de Panamá Nro. 4050</div> 
                    <div className=' h-full flex items-center'>Surquillo, Lima, Lima, Perú</div>    
                </article>
                <article className='w-full h-auto  border-[#DDDDDD] border bg-[#F3F3F3] flex flex-col'>
                    <div className=' flex w-full h-full border-[#DDDDDD] border-b px-4 gap-4'>
                        <div className='w-full flex justify-between'>
                            <div className='h-full flex  items-center'>
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
                        <div className='w-full flex justify-between '>
                            <div className='h-full flex  items-center'>
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
                    <div className=' flex w-full h-full border-[#DDDDDD] border-b  px-4'>
                        RUC:  AAAAAAAAAAAAAAAAAAAAAAAAA
                    </div>
                    <div className=' flex w-full h-full border-[#DDDDDD] border-b px-4'>
                        {`Señor(es) AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA`}
                    </div>
                    <div className=' flex w-full h-full border-[#DDDDDD] border-b px-4'>
                        Dirección: AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
                    </div>
                    <div className=' flex w-full h-full px-4'> 
                        Tipo de moneda : SOL
                    </div>
                </article>
            </article>
        </main>
    )
}
export default FacturaBoleta