import { Fragment } from "react"
import Navbar from "./components/Navbar"
import Main from "./components/Main"
import Footer from "./components/Footer"
import ItemListContainer from "./components/ItemListContainer"
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <>
  <Navbar/>
  <ItemListContainer saludo="Bienvenidos" />
    </>
  ) 
}

export default App


