import { useState } from 'react'
import Uno from './assets/1Curso.jpg'
import Dos from './assets/2Curso.jpg'
import Tres from './assets/3Curso.jpg'
import Cuatro from './assets/4Curso.jpg'
import Cinco from './assets/5Curso.jpg'



function App() {


  const [show1, setShow1] = useState(false)
  const [show2, setShow2] = useState(false)
  const [show3, setShow3] = useState(false)

  const [data, setData] = useState([
    {
      titulo: "Presentación", link: "https://www.youtube.com/embed/BPRaK13Ms0k?si=gkSqkv1f6vmzQS8M",
      descripcion: <><p>Este curso está diseñado con fines educativos y prácticos. Todo el contenido, ejemplos, integraciones y configuraciones mostradas son orientativos y
        deben adaptarse a las necesidades y regulaciones de cada proyecto o empresa por parte de los alumnos.</p></>
    },
    {
      titulo: "Creación de la cuenta Kommo", link: "https://www.youtube.com/embed/VN-UwnZNL9A?si=9SFdiXyQR2LN5j3o", link2: "https://www.youtube.com/embed/7EbeWf96kMs?si=auIeVDkGRlIdMfUv",
      descripcion: <><p>En este video aprenderás a crear una cuenta en Kommo y a configurarla para que puedas empezar a utilizarla en tu sistema comercial.</p></>
    },
    {
      titulo: "Conexión de canles de venta en Kommo", link: "https://www.youtube.com/embed/iVpuLzpEUso?si=hts-Sk_TsB1Xb87g",
      descripcion: <><p>En este video aprenderás a conectar los canales de venta en Kommo para que puedas empezar a utilizarlos en tu sistema comercial.</p></>
    },
    {
      titulo: "Guia de WhatsApp API", link: "https://www.youtube.com/embed/V7-a1blMshY?si=JV9gfinlSABtEOip",
      descripcion: <><p>En este video aprenderás a conectar WhatsApp API en Kommo para que puedas empezar a utilizarla en tu sistema comercial.</p><br />
        <p className="font-bold">Importante:</p><p>El chip con el número nuevo que compres no debe estar asociado ni a WhatsApp Business ni a WhatsApp personal.</p><br />
        <p className="font-bold">Links importantes:</p>
        <p>Soporte Meta: <a className='text-blue-500 hover:underline cursor-pointer' target="_blank" href="https://www.facebook.com/business-support-home/contact-support">
          https://www.facebook.com/business-support-home/contact-support
        </a></p><br />
        <p>Calculadora de costos: <a className='text-blue-500 hover:underline cursor-pointer' target="_blank" href="https://www.kommo.com/es/calculadora-precios-whatsapp/">
          https://www.kommo.com/es/calculadora-precios-whatsapp/
        </a></p><br />
        <p>GPT especialista en WhatsApp API para Kommo: <a className='text-blue-500 hover:underline cursor-pointer' target="_blank" href="https://chatgpt.com/g/g-690e116dd80881919d3964b7d7828050-asesor-de-wha-api-leon-group">
          https://chatgpt.com/g/g-690e116dd80881919d3964b7d7828050-asesor-de-wha-api-leon-group
        </a></p><br />
        <p>Acceso a administrador comercial de Meta: <a className='text-blue-500 hover:underline cursor-pointer' target="_blank" href="https://business.facebook.com/select">
          https://business.facebook.com/select
        </a></p><br />
        <p>Estado de la conexión del número en Meta: <a className='text-blue-500 hover:underline cursor-pointer' target="_blank" href="https://business.facebook.com/wa/manage/phone-numbers/">
          https://business.facebook.com/wa/manage/phone-numbers/
        </a></p><br />
        <p>Contactar a soporte de Kommo: <a className='text-blue-500 hover:underline cursor-pointer' target="_blank" href="https://morning-cicada-5a7.notion.site/C-mo-contactar-a-soporte-de-Kommo-en-3-pasos-12a8808eb4bb8033a1b6c4d015de0d54">
          https://morning-cicada-5a7.notion.site/C-mo-contactar-a-soporte-de-Kommo-en-3-pasos-12a8808eb4bb8033a1b6c4d015de0d54
        </a></p><br />
        <p>Guía de WhatsApp API de Kommo: <a className='text-blue-500 hover:underline cursor-pointer' target="_blank" href="https://www.kommo.com/es/blog/integracion-whatsapp/">
          https://www.kommo.com/es/blog/integracion-whatsapp/
        </a></p>
      </>
    },
    {
      titulo: "Cómo conectar WhatsApp Lite en Kommo",
      imagenes: [
        { titulo: "1) Entrá a Ajustes → Integración y buscá “WhatsApp Lite", link: Uno },
        { titulo: "2) Hacé clic en el botón verde “Conectar”", link: Dos },
        { titulo: "3) Elegí el tipo de teléfono desde el que vas a vincular: Android o iPhone", link: Tres },
        { titulo: "4) Escaneá el código QR desde tu WhatsApp → Dispositivos vinculados → Vincular dispositivo", link: Cuatro },
        { titulo: "5) Una vez vinculado, asigná el número al embudo que quieras usar (por ejemplo: “Venta de curso”)", link: Cinco }],
      descripcion: <><p>Esta guía te muestra, de forma simple y rápida, cómo conectar WhatsApp Lite en Kommo en pocos pasos. La idea es que puedas seguirla sin complicaciones y dejar
        tu número operativo dentro del CRM en minutos. Antes de empezar, revisá las consideraciones iniciales para asegurarte de que esta integración es la opción adecuada para tu negocio.</p><br />
        <p className='font-bold'>Antes de conectar WhatsApp Lite, tené en cuenta esto:</p>
        <div className='pl-8'>
          <li>WhatsApp Lite no es una integración oficial de Meta, sino una función propia de Kommo. Por ese motivo puede ser más inestable y Meta podría bloquearla o eliminarla en cualquier momento.</li>
          <li>No depende del WhatsApp Web tradicional, por lo que no se corta si el teléfono se apaga, pero sí requiere que el número mantenga actividad periódica.</li>
          <li>WhatsApp recomienda abrir la app al menos una vez cada 14 días para evitar desautorizaciones del dispositivo.</li>
          <li>No permite opciones de mensajes avanzadas: sirve para chatear dentro del CRM crear salesbots, conectar al agente de IA de n8n. Para bots con botones, o envíos masivos necesitás la API oficial.</li>
          <li>Podés conectar varios números, cada uno asociado a un embudo distinto.</li>
          <li>Es ideal para centralizar atención y ventas, pero no es apta para notificaciones transaccionales, mensajes masivos o procesos sensibles.</li>
          <li>Si WhatsApp detecta actividad inusual, puede pedirte volver a vincular el número.</li>
        </div>
      </>
    },
    {
      titulo: "Creación de usuario y breve recorrido de N8N", link: "https://www.youtube.com/embed/CTeucLrEv70?si=t5nZf3Y9VThAkOIL",
      descripcion: <><p>En este video te explicamos cómo crear un usuario en N8N y te damos un breve recorrido de la plataforma para que puedas familiarizarte con ella.</p></>
    },
    {
      titulo: "Cómo montar N8N en un servidor VPS propio", link: "https://www.youtube.com/embed/JjCZ9onJzmU?si=F_E5z2Fujr7TEPDD",
      descripcion: <><p>En este video te explicamos cómo montar N8N en un servidor VPS propio.</p><br />
        <p>Acceso a Hostinger con <span className='font-bold'>20% de descuento</span>: <a className='text-blue-500 hover:underline cursor-pointer' target="_blank" href="https://hostinger.com.ar?REFERRALCODE=2EXECCOMMP5J">
          https://hostinger.com.ar?REFERRALCODE=2EXECCOMMP5J
        </a></p><br />
        <p>Acceso a plan recomendado (KVM 2) por 1 año, con <span className='font-bold'>20% de descuento</span>: 
        <a className='text-blue-500 hover:underline cursor-pointer' target="_blank" href="https://www.hostinger.com.ar/cart?product=vps%3Avps_kvm_2&period=12&referral_type=cart_link&REFERRALCODE=2EXECCOMMP5J&referral_id=019c14da-374c-7136-8c8d-c85217591475">
          https://www.hostinger.com.ar/cart?product=vps%3Avps_kvm_2&period=12&referral_type=cart_link&REFERRALCODE=2EXECCOMMP5J&referral_id=019c14da-374c-7136-8c8d-c85217591475
        </a></p>
        <p className='font-bold text-center underline'>🧩 Sobre las dos formas de usar n8n</p><br />
        <p>N8N puede utilizarse de dos maneras:</p><br />
        <p className='font-bold'>1. Usando el servidor oficial de n8n (n8n cloud)</p>
        <p>Esta es la opción que mostramos en el curso para empezar rápido, sin configuraciones técnicas. El acceso es directo y todo se gestiona desde la web.</p><br />
        <p className='font-bold'>2. Instalándolo en un servidor propio (VPS)</p>
        <p>Esta opción requiere una configuración técnica inicial, pero te permite mayor control, personalización y capacidad de escalado. <br />
          Es importante entender que estas dos instalaciones son independientes entre sí. No se sincronizan ni comparten información automáticamente.</p><br />

        <p>Son dos entornos diferentes, y se elige uno u otro según la etapa o necesidad del proyecto.</p><br />
        <p>👉 Si primero empezaste usando la versión cloud (n8n server oficial) y más adelante decidís migrar a un VPS, vas a necesitar:</p>
        <p>Exportar manualmente tus flujos,<br />
          Importarlos en tu nueva instalación,<br />
          Y volver a conectar todas las integraciones (APIs, Webhooks, credenciales, servicios externos, etc.).br
          Esto se debe a que las credenciales y permisos no se transfieren por seguridad.</p>
        <p className='font-bold'>⚠️ Importante: Guardá tu usuario y contraseña de EasyPanel y n8n</p><br />
        <p>EasyPanel <span className='font-bold'>no tiene un botón de “recuperar contraseña”</span> como las plataformas web que usamos todos los días.
          Si perdés el usuario o la clave, <span className='font-bold'>no existe una forma sencilla de recuperarlos desde el navegador</span>
          y puede implicar procesos avanzados que no vamos a ver en este curso por su enfoque.</p><br />
        <p>Por eso es fundamental que:</p>
        <div className='pl-8'>
          <li>Guardes tu email y contraseña en un lugar seguro.</li>
          <li>Uses un gestor de contraseñas o un archivo protegido.</li>
          <li>No confíes en la memoria ni en anotaciones sueltas.</li>
        </div><br />
        <p className='font-bold'>🗄️ Y también: hacé backups de tus flujos en n8n por si perdés a contraseña y necesitás reinstalar easy panel.</p>
        <div className='pl-8'>
          <li>Exportá tus flujos periódicamente.</li>
          <li>Guardalos en Google Drive, Dropbox o tu PC.</li>
          <li>Usá nombres con fecha para tener todo ordenado.</li>
        </div><br />

        <div className='p-2 bg-[#D8F999] border-t border-t-[#62748E] border-b border-b-[#62748E]'>
          <p className='font-bold'>Error de ingreso a instancia de n8n:</p><br />
          <p>Varios alumnos nos han informado que cuando quieren acceder a n8n una vez instalado en el VPS les da un error como si la página estuviera caída, y esto no es un problema de la plataforma o un error de instalación, es una restricción por parte de algunos proveedores de internet sobre todo de Argentina.
            Hemos creado un video como respuesta a este problema y lo subimos a la sección "dudas frecuentes de alumnos". <br /><br />

            Si tu instancia de n8n te está dando problemas para ingresar, te recomiendo ir directamente a esa clase para ver como solucionarlo. <br /><br />

            Clic acá para ir directo a la clase</p>
        </div>

      </>
    }
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


            {/* ----------------------------------------------------------- GRUPOS DE LINKS ------------------------------------------------------- */}
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


              <div className={` flex flex-col p-2 border border-black ${show3 ? "h-[140px]" : "h-[42px]"} overflow-hidden transition-all duration-400`}>
                <div className='flex flex-row mb-2 items-center gap-2 hover:text-blue-500 cursor-pointer' onClick={() => setShow3(!show3)}>
                  <i className={`${show3 ? "fa-solid fa-angle-up" : "fa-solid fa-angle-down"} transition-all duration-300`}></i>
                  <p className='text-[18px] font-bold text-[#4E4E55]'>Implementa N8N en tu sistema comercial</p>
                </div>

                <div className='flex flex-col gap-2'>
                  <button onClick={() => setIndex(5)} className='text-lg text-[#4E4E55] font-semibold ml-7 hover:text-blue-500 cursor-pointer text-start'>Creación de usuario y breve recorrido de N8N</button>
                  <button onClick={() => setIndex(6)} className='text-lg text-[#4E4E55] font-semibold ml-7 hover:text-blue-500 cursor-pointer text-start'>Cómo montar N8N en un servidor VPS propio</button>
                </div>
              </div>


            </div>
            {/* ----------------------------------------------------------- GRUPOS DE LINKS ------------------------------------------------------- */}




          </div>

          <div id='contenido' className='border border-black w-[70%] rounded-lg bg-white p-4 flex flex-col gap-2 justify-center items-center'>
            <h1 className='text-center text-[30px] font-semibold text-[#4E4E55]'>{data[index].titulo}</h1>
            <iframe className={`${data[index].link ? "block" : "hidden"}`} width="90%" height="600" src={`${data[index].link}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            <iframe className={`${data[index].link2 ? "block" : "hidden"}`} width="90%" height="600" src={`${data[index].link2}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            {/* <p className='text-center text-[20px] font-semibold text-[#4E4E55] my-3'>{data[index].descripcion}</p> */}

            <div className='text-[20px] font-semibold text-[#4E4E55] my-3 w-[95%] text-wrap overflow-hidden'>
              {data[index].descripcion}
            </div>

            {data[index].imagenes && data[index].imagenes.map((imagen, index) => {
              return (
                <>
                  <p className='text-[20px] font-semibold text-[black] my-3'>{imagen.titulo}</p>
                  <img className='w-[80%] h-[600px] object-cover' key={index} src={imagen.link} alt={imagen.titulo} />
                </>
              )
            })}
            {/* <textarea name="" id="" className='w-full h-[200px] rounded-lg p-2 text-[20px] font-semibold text-[#4E4E55] my-3' readOnly disabled value={data[index].descripcion.replace(/\n/g, "\n")}></textarea> */}
          </div>

        </div>
      </div>
    </>
  )
}

export default App
