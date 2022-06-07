
import CartWidget from "./CartWidget"
import {Button} from "react-bootstrap"
const Navbar = (props) => {
    console.log(props.test)
    return (
        <header>


            <h1>SMP</h1>
            <Button>click</Button>
            <CartWidget/>
            <nav>
                <a href="">Inicio</a>
                <a href="">Contacto</a>
                <a href="">Nosotros</a>
            </nav>
        </header>

        
    )
}
export default Navbar