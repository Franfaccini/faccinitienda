import { useState } from "react"


const ItemCount = ({ stock, initial, onAdd }) => {


  const [contador, setContador] = useState(initial)




  const aumentarContador = () => {
   
    setContador(contador + 1)
  }

  const bajarContador = () => {
    setContador(contador - 1)
  
  }

  const confirmarContador = () => { }

  return (
    <div>
      <p>El contador va : {contador}</p>
      <button onClick={aumentarContador}>aumentar</button>
      <button onClick={bajarContador}>disminuir</button>
      <button>confirmar</button>
    </div>
  )
}
export default ItemCount