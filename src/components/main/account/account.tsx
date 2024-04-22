import Lupa from "../../../icons/logoBusqueda"
import IconSettins from "./iconSeti"
import IconUser from "./iconUser"

function Account (){
    return(
        <section className="bg-[#333333] relative flex flex-col align-top ">
            <article className=" w-full grid justify-center items-center h-12 hover:text-[#F6F6F6]">
                <Lupa className="w-[30px] select-none transform rotate-90"/> 
            </article>
            <article className=' absolute bottom-0 w-full flex flex-col justify-center items-center'>
                <div className=" w-full grid justify-center items-center h-12 hover:text-[#F6F6F6]">
                    <IconUser  className=' w-[30px]'/>
                </div>
                <div className=" w-full grid justify-center items-center h-12 hover:text-[#F6F6F6]">
                    <IconSettins  className= ' w-[30px]'/>
                </div>    
            </article>  
        </section>
    )
}
export default Account