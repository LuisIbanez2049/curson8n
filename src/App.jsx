import { useState } from 'react'


function App() {


  const [show, setShow] = useState(false)


  return (
    <>
      <div className=' w-full min-h-screen'>
        <h1 className='text-2xl font-bold text-center'>
          Automatización de ventas
        </h1>
        

        <div id='navMasContenido' className='flex flex-row justify-around'>

          <div className='nav'>

            <div className={`border border-black ${show ? "": "h-[30px] overflow-hidden"} transition-all duration-300`}>
              <div className='flex flex-row items-center gap-2 hover:text-blue-500 cursor-pointer' onClick={() => setShow(!show)}>
                <i className={`${show ? "fa-solid fa-angle-up": "fa-solid fa-angle-down"} transition-all duration-300`}></i>
                <p className='text-xl font-bold'>Inicio</p>
              </div>
              <p className='text-lg font-semibold ml-7 hover:text-blue-500 cursor-pointer'>Presentación</p>

            </div>
            
          </div>

          <div id='contenido' className='border border-black w-[70%]'>

          </div>

        </div>
      </div>
    </>
  )
}

export default App
