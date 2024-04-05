import IconSettins from "./iconSeti"
import IconUser from "./iconUser"

function Account (){
    return(
        <section className="bg-[#333333] relative">
            <article className=' absolute bottom-0 w-full flex flex-col justify-center items-center'>
                <div className=" w-full grid justify-center items-center h-12 hover:text-[#F6F6F6]">
                    <IconUser  className=' w-8'/>
                </div>
                <div className=" w-full grid justify-center items-center h-12 hover:text-[#F6F6F6]">
                    <IconSettins  className= ' w-8'/>
                </div>    
            </article>  
        </section>
    )
}
export default Account