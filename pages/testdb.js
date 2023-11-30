import { data } from 'autoprefixer'
import  axios from 'axios'
import { useEffect, useState } from 'react'
import Popup from '@/components/Popup'

//peticion a la api
export async function getServerSideProps(){
    const res = await axios.get('http://localhost:3000/api/dbpage')
    const data = await res.data
    return{
        props: {
            data
        }
    }
}

export default function Testdb({ data }) {
 //inicializacion de constantes
  //const [data,setData]=useState([{}])
  const [loading, setLoading]= useState(false) 
  const [nombre, setNombre]= useState('')
  const [open,setOpen]=useState(false)

  
//1poner boton
//2click al boton cambie el estado a true
//3espero 10 segundos
//4 cambio el estado falso

  
//time para cambiar el estado del boton de forma autoimatica despues de N milisegundos
  const handleLoading = () =>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },5000)
  }

  //ejemplo de useefect, se ejecuta cuando carga la pagina 
  //cargara los datos que esten en los corchetes, si hay una variable y se llama al refrescar pagina
  //carga de nuevo los datos que habia en al variable o bien cada vez que cambie el estado de algo
  useEffect(()=>{
    console.log('useEffect')
  },[])


  console.log(data)
  return (
    <>
    <Popup open={open} setOpen={setOpen}/>
    <div className='flex'>
    {/* boton de carga */}
    {loading ? (
      //cuando esta cargando
      <button className='bg-red-500' disabled>Detener</button> //inicializado como desactivado
    ):(
      //cuando no esta cargando
      <button className='bg-green-500' onClick={handleLoading}>Iniciar</button>//Al presionar el boton se llama a la funcion handleLoading 
    )
    }

    </div>
      <main className="h-screen w-screen bg-black">
        <h1 className="text-4xl text-center text-white">{data[0].nombre}</h1>

        {data.map((alumno,i) => (
          <div className="flex" key={i}>
            <h1 className="text-white">{alumno.nombre}</h1>
            <h2 className="text-xs">{alumno.apellidos}</h2>
            {/* Boton para eliminar */}
            {/* <button className='bg-red-500' onClick={()=>}></button> */}
            <button className='bg-blue-500'onClick={()=>setOpen(true)}>Editar</button>
          </div>
        ))}
      </main>
    </>
  );
}