import { Fragment } from "react"
import Navbar from "./components/Navbar"
import Main from "./components/Main"
import Footer from "./components/Footer"
import ItemListContainer from "./components/ItemListContainer"
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header"
const App = () => {
  return (
    <>
  <Header/>
  <ItemListContainer saludo="Bienvenidos" />
  <Footer/>
    </>
  ) 
}

export default App


