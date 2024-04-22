import Account from '../account/account'
import Facturacion from '../mains/facturacion/mainfacturacion/facturacion'
import './main.css'
function Main (){
    return(
        <main className="main text-[#848484]">
            <Account/>
            <Facturacion/>
        </main>
    )
}
export default Main