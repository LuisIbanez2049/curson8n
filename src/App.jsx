import { useState } from 'react'


function App() {


  const [show1, setShow1] = useState(false)
  const [show2, setShow2] = useState(false)

  const [data, setData] = useState([
    { titulo: "Presentación", link: "https://www.youtube.com/embed/BPRaK13Ms0k?si=gkSqkv1f6vmzQS8M", descripcion: "💡 Este curso está diseñado con fines educativos y prácticos. Todo el contenido, ejemplos, integraciones y configuraciones mostradas son orientativos y deben adaptarse a las necesidades y regulaciones de cada proyecto o empresa por parte de los alumnos." },
    { titulo: "Creación de la cuenta Kommo", link: "https://www.youtube.com/embed/VN-UwnZNL9A?si=9SFdiXyQR2LN5j3o", link2: "https://www.youtube.com/embed/7EbeWf96kMs?si=auIeVDkGRlIdMfUv", descripcion: "Presentación2" },
    { titulo: "Conexión de canles de venta en Kommo", link: "https://www.youtube.com/embed/iVpuLzpEUso?si=hts-Sk_TsB1Xb87g", descripcion: "Presentación3" },
    { titulo: "Guia de WhatsApp API", link: "https://www.youtube.com/embed/V7-a1blMshY?si=JV9gfinlSABtEOip", descripcion: "Presentación4" }
  ])

  const [index, setIndex] = useState(0)

  return (
    <>
      <div className=' w-full min-h-screen bg-[#F2F2F3]'>
        <h1 className='text-[45px] text-[#4E4E55] my-6 font-bold text-center'>
          Automatización de ventas
        </h1>


        <div id='navMasContenido' className='flex flex-row justify-around'>

          <div className='relative'>
            <div id='nav' className=' border border-red-500 sticky top-10 bg-white p-4 flex flex-col gap-2 rounded-lg'>

              <div className={`border border-black p-2 ${show1 ? "h-[80px]" : "h-[42px]"} overflow-hidden transition-all duration-400`}>
                <div className='flex flex-row mb-2 items-center gap-2 hover:text-blue-500 cursor-pointer' onClick={() => setShow1(!show1)}>
                  <i className={`${show1 ? "fa-solid fa-angle-up" : "fa-solid fa-angle-down"} transition-all duration-300`}></i>
                  <p className='text-[18px] font-bold text-[#4E4E55]'>Inicio</p>
                </div>
                <button onClick={() => setIndex(0)} className='text-lg text-[#4E4E55] font-semibold ml-7 hover:text-blue-500 cursor-pointer text-start'>Presentación</button>

              </div>


              <div className={` flex flex-col p-2 border border-black ${show2 ? "h-[190px]" : "h-[42px]"} overflow-hidden transition-all duration-400`}>
                <div className='flex flex-row mb-2 items-center gap-2 hover:text-blue-500 cursor-pointer' onClick={() => setShow2(!show2)}>
                  <i className={`${show2 ? "fa-solid fa-angle-up" : "fa-solid fa-angle-down"} transition-all duration-300`}></i>
                  <p className='text-[18px] font-bold text-[#4E4E55]'>Implementa Kommo en tu sistema comercial</p>
                </div>

                <div className='flex flex-col gap-2'>
                  <button onClick={() => setIndex(1)} className='text-lg text-[#4E4E55] font-semibold ml-7 hover:text-blue-500 cursor-pointer text-start'>Creación de la cuenta de Kommo</button>
                  <button onClick={() => setIndex(2)} className='text-lg text-[#4E4E55] font-semibold ml-7 hover:text-blue-500 cursor-pointer text-start'>Conexión de canles de venta en Kommo</button>
                  <button onClick={() => setIndex(3)} className='text-lg text-[#4E4E55] font-semibold ml-7 hover:text-blue-500 cursor-pointer text-start'>Guia de WhatsApp API</button>
                  <button onClick={() => setIndex(4)} className='text-lg text-[#4E4E55] font-semibold ml-7 hover:text-blue-500 cursor-pointer text-start'>Cómo conectar WhatsApp Lite en Kommo (QR)</button>
                </div>

              </div>


            </div>
          </div>

          <div id='contenido' className='border border-black w-[70%] rounded-lg bg-white p-4 flex flex-col gap-2 justify-center items-center'>
            <h1 className='text-center text-[30px] font-semibold text-[#4E4E55]'>{data[index].titulo}</h1>
            <iframe width="90%" height="600" src={`${data[index].link}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <iframe className={`${data[index].link2 ? "block" : "hidden"}`} width="90%" height="600" src={`${data[index].link2}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <p className='text-center text-[20px] font-semibold text-[#4E4E55] my-3'>{data[index].descripcion}</p>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
