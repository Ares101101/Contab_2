import FacturaBoleta from '../factura/facturaboleta'
import Productos from '../productos/productos'
import './facturacion.css'

function Facturacion(){

    return(
        <main className=" mainFacturacion">
            <Productos/>
            <FacturaBoleta/>
        </main>
    )
}
export default Facturacion