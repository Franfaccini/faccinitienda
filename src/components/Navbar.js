
const Navbar = (props) => {
  if(props.inHeader){

    return (
            <nav>
                <a href="">Inicio</a>
                <a href="">Contacto</a>
                <a href="">Nosotros</a>
            </nav>
    )
    }else{
        return(
        <nav>
        <a href="">Facebook</a>
        <a href="">Instagram</a>
        <a href="">Nosotros</a>
    </nav>)
    }
}
export default Navbar