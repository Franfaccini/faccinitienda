import CartWidget from "./CartWidget"
import { Button } from "react-bootstrap"
import Navbar from "./Navbar"

const Header = () => {
    return(
        <header>
            <h1>SMP</h1>
            <Button>click</Button>
            <CartWidget/>
            <Navbar inHeader={true}/>
        </header>
    )
}

export default Header