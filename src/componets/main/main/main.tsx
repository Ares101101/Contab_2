import Account from '../account/account'
import Facturacion from '../mains/facturacion/mainfacturacion/facturacion'
import './main.css'
function Main (){
    return(
        <main className="main text-[#848484]">
            <Account/>
            <Facturacion/>
            <section className=' bg-[#0576b8ff]'>

            </section>
            <section className=' bg-[#0576b8ff] '>

            </section>
        </main>
    )
}
export default Main