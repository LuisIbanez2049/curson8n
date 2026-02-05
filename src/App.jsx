import { useState } from 'react'
import Uno from './assets/1Curso.jpg'
import Dos from './assets/2Curso.jpg'
import Tres from './assets/3Curso.jpg'
import Cuatro from './assets/4Curso.jpg'
import Cinco from './assets/5Curso.jpg'
import Seis from './assets/6Curso.png'
import Logo from './assets/logo.png'



function App() {


  const [show1, setShow1] = useState(false)
  const [show2, setShow2] = useState(false)
  const [show3, setShow3] = useState(false)
  const [show4, setShow4] = useState(false)
  const [show5, setShow5] = useState(false)
  const [show6, setShow6] = useState(false)
  const [show7, setShow7] = useState(false)
  const [show8, setShow8] = useState(false)
  const [show9, setShow9] = useState(false)
  const [show10, setShow10] = useState(false)

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

            <button onClick={() => setIndex(34)} className=' text-blue-500 cursor-pointer text-start underline'>
              Clic acá para ir directo a la clase</button></p>
        </div>

      </>
    },
    {
      titulo: "Conexión entre plataformas", link: "https://www.youtube.com/embed/SsYjXBKg-dE?si=IXfO9kHXPdVhzefO",
      descripcion: <><p>En este video te explicamos cómo conectar las diferentes plataformas entre sí para que puedan comunicarse entre ellas.</p></>
    },
    {
      titulo: "Conexión entre Kommo y N8N", link: "https://res.cloudinary.com/dlyoighih/video/upload/v1747970285/samples/elephants.mp4",
      descripcion: <>
        <p>En esta clase vamos a conectar Kommo con n8n para que todo el sistema quede integrado. Te vamos a proporcionar un archivo JSON preconfigurado con el flujo de automatización, que podrás descargar e importar directamente en tu cuenta de n8n.<br />

          Qué vamos a hacer en esta clase: </p>
        <div className='pl-8'>
          <li>Descargar el archivo JSON con el flujo completo.</li>
          <li>Importarlo en tu cuenta de n8n.</li>
          <li>Conectar Kommo con n8n para que ambas plataformas trabajen juntas.</li>
        </div> <br />

        <p>📌 Objetivo final:</p>
        <p>Dejar tu entorno preparado y con la integración activa, listo para empezar a trabajar con el flujo automatizado configurado durante el curso.</p><br />
        <p className='font-bold'>Kommo credentials</p>
        <p>Authorization URL: https://www.kommo.com/oauth</p>
        <p>Access Token URL: https://subdomain.kommo.com/oauth2/access_token</p>
        <p>Auth URI Query Parameters: grant_type=authorization_code</p><br />
        <p className='font-bold text-center text-[25px]'>Descarga el json acá ⬇️⬇️⬇️</p>
        <p className='text-center'>
          <a href="https://drive.google.com/file/d/1kzpHh53kXpIh2oEbHwEQ44pT23wYNbI0/view?usp=sharing" target="_blank" rel="noopener noreferrer" className='hover:text-blue-500 cursor-pointer hover:underline'>
            https://drive.google.com/file/d/1kzpHh53kXpIh2oEbHwEQ44pT23wYNbI0/view?usp=sharing
          </a>
        </p><br />
        <p className='text-center p-2 bg-[#D8F999] border-t border-t-[#62748E] border-b border-b-[#62748E]'>💡Importante: los webhooks que agregamos en Kommo, tanto el de test como el de producción, suelen demorar en enviar datos a N8N cuando lo instalamos por PRIMERA VEZ,
          entonces podemos estar haciendo pruebas y el webhook no funciona, recomendamos esperar unos 40 minutos desde que agregamos la URL del webhook a Kommo para hacer las
          primeras pruebas.</p><br />
        <p>
          Acceso plataforma de Open AI (tokens):
          <a href="https://platform.openai.com/" target="_blank" rel="noopener noreferrer" className='ml-2 hover:text-blue-500 cursor-pointer hover:underline'>
            https://platform.openai.com/
          </a>
        </p>
      </>
    },
    {
      titulo: "Copias de seguridad", imagenes: [
        { titulo: "Imagen de referencia", link: Seis }],
      descripcion: <>
        <p>
          Guardá tus workflows. No confíes en la suerte. <br />

          N8N es poderoso, pero no es infalible: una actualización, un bug o un error humano puede romper un flujo sin aviso. <br />
          Por eso siempre descargá una copia en JSON desde el menú de cada workflow. <br />

          Un backup te salva de:
        </p> <br />
        <div className='pl-8'>
          <li>Perder automatizaciones completas.</li>
          <li>Tener que reconstruir flujos desde cero.</li>
          <li>Quedarte sin sistema por un cambio de versión</li>
          <li>Romper procesos críticos en producción</li>
        </div> <br />
        <p>Cómo descargar tu workflow:</p> <br />
        <div className='pl-8'>
          <li>Hacé clic en los tres puntos (⋯) arriba a la derecha del editor.</li>
          <li>Seleccioná “Download” en el menú.</li>
          <li>Guardá el archivo JSON en tu carpeta de backups (Drive, Dropbox, o donde manejes tus versiones).</li>
        </div> <br />
        <p>
          Hacé tu biblioteca de respaldos y mantené tu sistema seguro. <br />
          Un clic hoy te evita un dolor de cabeza mañana.
        </p> <br />
      </>
    },
    {
      titulo: "Primerso pasos, pruebas y errores frecuentes", link: "https://www.youtube.com/embed/mSMBTAGy1_w?si=uQbKQXrbKktu9eeC",
      descripcion: <>
        <p>
          💡Importante: si el interruptor para poner el modo producción no se ve como en el video es porque tu versión es la 2.0, podrás ver las diferencias con la versión 1.0
          (es la que se grabó el video) en este link:

          <button onClick={() => setIndex(33)} className='ml-2 text-blue-500 cursor-pointer text-start underline'>
            Clic acá para ir directo a la clase</button>
        </p>
      </>
    },
    {
      titulo: "Pruebas de funcionamiento en N8N", link: "https://www.youtube.com/embed/u_L-jspipS4?si=ZouxLBcIc8NHNcGQ",
      descripcion: <>
        <p className='p-2 bg-[#D8F999] border-t border-t-[#62748E] border-b border-b-[#62748E]'>
          💡Importante: Para frenar la IA, crear la etiqueta con el texto que diga "stop_ai", NO "stop_ia". <br />
          💡Importante: sobre el nodo de transcripción de audio, más adelante podrás ver esta implementación. <br />
          💡Importante: si el interruptor para poner el modo producción no se ve como en el video es porque tu versión es la 2.0,
          podrás ver las diferencias con la versión 1.0 (es la que se grabó el video) en este link:
          <button onClick={() => setIndex(33)} className='ml-2 text-blue-500 cursor-pointer text-start underline'>
            Clic acá</button>
        </p> <br />
        <p>
          Antes de crear un agente de IA, es fundamental redactar un <span className='font-bold'>prompt claro y estructurado.</span> <br />

          El prompt funciona como el “manual de uso” del agente: le indica qué rol cumple, cuál es su objetivo, cómo debe comunicarse y hasta dónde puede llegar en la conversación. <br />

          Si el prompt está mal definido, el agente puede responder de manera confusa, inventar información o no guiar bien al usuario.
          En cambio, si lo estructurás con las siguientes secciones, vas a tener un agente <span className='font-bold'>coherente, profesional y alineado con tu negocio.</span>
        </p> <br />

        <p className='font-bold text-center text-[25px]'>Descarga el prompt acá ⬇️⬇️⬇️</p>
        <p className='text-center'>
          <a href="https://docs.google.com/document/d/1spOaHqyGvCJZot3fL7JKPCSwr2LS2L9cQw4E_DBBLis/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className='hover:text-blue-500 cursor-pointer hover:underline'>
            https://docs.google.com/document/d/1spOaHqyGvCJZot3fL7JKPCSwr2LS2L9cQw4E_DBBLis/edit?usp=sharing
          </a>
        </p>

      </>
    },
    {
      titulo: "Conecta el agente a OpenAI", link: "https://www.youtube.com/embed/2hnpqyExf1I?si=hCyWj8nFrkhuT8Kq",
      descripcion: <><p>En este video te explicamos cómo conectar el agente a OpenAI.</p> <br />
        <p className=''>
          Acceso plataforma de Open AI (tokens):
          <a href="https://platform.openai.com/" target="_blank" rel="noopener noreferrer" className='ml-2 hover:text-blue-500 cursor-pointer hover:underline'>
            https://platform.openai.com/
          </a>
        </p>
      </>
    },
    {
      titulo: "Conexiones con Google", link: "https://www.youtube.com/embed/sYRF0_gjLmI?si=jzFqi61hMNCBbERr",
      descripcion: <>
        <p>En este video te explicamos cómo hacer las conexiones con las diferentes plataformas de Google.</p> <br />
        <p>
          Acceso:
          <a href="https://cloud.google.com/apis" target="_blank" rel="noopener noreferrer" className='ml-2 hover:text-blue-500 cursor-pointer hover:underline'>
            https://cloud.google.com/apis
          </a>
        </p>
      </>
    },
    {
      titulo: "Conexión con base de datos en Supabase", link: "https://www.youtube.com/embed/HIecMl_shKM?si=tF4pOnOUbDKMMZZQ",
      descripcion: <><p>En este video te explicamos cómo hacer la conexión con la base de datos en Supabase.</p> <br />
        <p>
          Supabase:
          <a href="https://supabase.com/" target="_blank" rel="noopener noreferrer" className='ml-2 hover:text-blue-500 cursor-pointer hover:underline'>
            https://supabase.com/
          </a>
        </p>
      </>

    },
    {
      titulo: "Costos", link: "https://www.youtube.com/embed/lGjG5yT_r9E?si=BsGQ-XNLHxXOd7B0",
      descripcion: <>
        <p>
          💼 Costos fijos mensuales:
        </p> <br />
        <p>
          Kommo CRM:
          <a href="https://www.kommo.com/es/precios/comparar-planes/" target="_blank" rel="noopener noreferrer" className='ml-2 hover:text-blue-500 cursor-pointer hover:underline'>
            https://www.kommo.com/es/precios/comparar-planes/
          </a> <br />
          N8N:
          <a href="https://n8n.io/pricing/" target="_blank" rel="noopener noreferrer" className='ml-2 hover:text-blue-500 cursor-pointer hover:underline'>
            https://n8n.io/pricing/
          </a> <br />
          VPS con descuento del 20%:
          <a href="https://www.hostinger.com.ar/cart?product=vps%3Avps_kvm_2&period=12&referral_type=cart_link&REFERRALCODE=2EXECCOMMP5J&referral_id=019c14da-374c-7136-8c8d-c85217591475" target="_blank" rel="noopener noreferrer" className='ml-2 hover:text-blue-500 cursor-pointer hover:underline'>
            https://www.hostinger.com.ar/cart?product=vps%3Avps_kvm_2&period=12&referral_type=cart_link&REFERRALCODE=2EXECCOMMP5J&referral_id=019c14da-374c-7136-8c8d-c85217591475
          </a> <br /> <br />

          ⚙️ Costos variables: <br />
          WhatsApp API:
          <a href="https://business.whatsapp.com/products/platform-pricing?lang=es_LA" target="_blank" rel="noopener noreferrer" className='ml-2 hover:text-blue-500 cursor-pointer hover:underline'>
            https://business.whatsapp.com/products/platform-pricing?lang=es_LA
          </a> <br />
          Tokens de OpenAI:
          <a href="https://openai.com/es-ES/api/pricing/" target="_blank" rel="noopener noreferrer" className='ml-2 hover:text-blue-500 cursor-pointer hover:underline'>
            https://openai.com/es-ES/api/pricing/
          </a> <br />
        </p>
      </>

    },
    {
      titulo: "Movimiento de columna automático dentro del CRM", link: "https://www.youtube.com/embed/81WSX0S-poI?si=XZTyMlwppCyv4eMS",
      descripcion: <><p>En este video te explicamos cómo hacer el movimiento de columna automático dentro del CRM.</p> <br />
        <p className='font-bold text-center text-[25px]'>Descarga el json acá ⬇️⬇️⬇️</p>
        <p className='text-center'>
          <a href="https://drive.google.com/file/d/1TLt_IUmWT_bYwj00JnmIpd5deaISRHNf/view?usp=sharing" target="_blank" rel="noopener noreferrer" className='hover:text-blue-500 cursor-pointer hover:underline'>
            https://drive.google.com/file/d/1TLt_IUmWT_bYwj00JnmIpd5deaISRHNf/view?usp=sharing
          </a>
        </p>
      </>
    },
    {
      titulo: "Transcripción de audio a texto", link: "https://www.youtube.com/embed/81WSX0S-poI?si=XZTyMlwppCyv4eMS",
      descripcion: <><p>En este video te explicamos cómo hacer la transcripción de audio a texto.</p> <br />
        <p className='font-bold text-center text-[25px]'>Descarga el json acá ⬇️⬇️⬇️</p>
        <p className='text-center'>
          <a href="https://drive.google.com/file/d/1z2oftlvpEUbDBzQE8Qc8foSEccMuKhIw/view?usp=sharing" target="_blank" rel="noopener noreferrer" className='hover:text-blue-500 cursor-pointer hover:underline'>
            https://drive.google.com/file/d/1z2oftlvpEUbDBzQE8Qc8foSEccMuKhIw/view?usp=sharing
          </a>
        </p>
      </>
    },
    {
      titulo: "Reset de memoria", link: "https://www.youtube.com/embed/rAvgX4zwu9I?si=dOvNKZvIRA6M3Kqa",
      descripcion: <><p>En este video te explicamos cómo resetear la memoria del asistente virtual.</p></>
    },
    {
      titulo: "Que tu agenta pueda rebatir objeciones", link: "https://www.youtube.com/embed/uManmwFOvr4?si=0RwHFwiDe_GJdxIF",
      descripcion: <><p>En este video te explicamos cómo hacer que tu agente pueda rebatir objeciones.</p> <br />
        <p> <span className='font-bold'>Instrucciones para el prompt:</span>  <br /> - Si el usuario plantea una objeción (ej. precio, tiempo, confianza, necesidad, técnica, formato), primero buscá la objeción en la
          base de datos `objeciones_respuestas` y respondé con la respuesta correspondiente. <br />
          - Si no encontrás la objeción en la base, usá un fallback: respondé con empatía, reforzá el valor del (producto/servicio) y, si hace falta,
          derivá a un asesor humano.
        </p>
      </>
    },
    {
      titulo: "Sheets como base de datos de productos", link: "https://www.youtube.com/embed/usX5NEerQlw?si=AhjZSnlGEPW2aBGX",
      descripcion: <><p>En este video te explicamos cómo usar Sheets como base de datos de productos.</p> <br />
        <p className='font-bold text-center text-[25px]'>Prompt para venta de celulares ⬇️⬇️</p>
        <p className='text-center'>
          <a href="https://docs.google.com/document/d/1S2zl3k6hC-5ZDPmsRO89BzdJjpelp9i_IOkP_zWqomw/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className='hover:text-blue-500 cursor-pointer hover:underline'>
            https://docs.google.com/document/d/1S2zl3k6hC-5ZDPmsRO89BzdJjpelp9i_IOkP_zWqomw/edit?usp=sharing
          </a>
        </p>
      </>
    },
    {
      titulo: "Cómo crear y gestionar bases de datos vectorial (RAG)", link: "https://www.youtube.com/embed/H7jxylJMfRo?si=6xRAwpxlJH-YDGo0",
      descripcion: <><p>En este video te explicamos cómo crear y gestionar bases de datos vectorial (RAG) para tu CRM.</p> <br />
        <p className='font-bold text-center text-[25px]'>Prompt utilizado ⬇️⬇️</p>
        <p className='text-center'>
          <a href="https://docs.google.com/document/d/1botLflXbFmOxjVr5wpc806HWYUuPTSYbqBOaySavh-s/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className='hover:text-blue-500 cursor-pointer hover:underline'>
            https://docs.google.com/document/d/1botLflXbFmOxjVr5wpc806HWYUuPTSYbqBOaySavh-s/edit?usp=sharing
          </a>
        </p>
      </>
    },
    {
      titulo: "Agendamiento automático de citas en Google Calendar ", link: "https://www.youtube.com/embed/hiDSb4uF3O4?si=pU6enlNC2BXIOPFP",
      descripcion: <><p>En este video te explicamos cómo agendar citas automáticamente en Google Calendar. <br /> <br />
        Continuación de la clase para verificar que no se superpongan las citas: <button onClick={() => setIndex(30)} className=' text-blue-500 cursor-pointer text-start underline'>
          Clic acá para ir directo a la clase</button>

      </p> <br />
        <p className='font-bold text-center text-[25px]'>Prompt + código ⬇️⬇️</p>
        <p className='text-center'>
          <a href="https://docs.google.com/document/d/1XNo-vYc0sj8OwjYrree9LYD9JarzJabNO2mA5uQ5aAY/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className='hover:text-blue-500 cursor-pointer hover:underline'>
            https://docs.google.com/document/d/1XNo-vYc0sj8OwjYrree9LYD9JarzJabNO2mA5uQ5aAY/edit?usp=sharing
          </a>
        </p>
      </>
    },
    {
      titulo: "Categorizador automático", link: "https://www.youtube.com/embed/mfRlZTcah_Y?si=aEtiPAQDKMqa9mOO",
      descripcion: <><p>En este video te explicamos cómo crear un categorizador automático para tus leads.</p> <br />
        <p className='font-bold text-center text-[25px]'>Prompt para inmobiliaria ⬇️⬇️</p>
        <p className='text-center'>
          <a href="https://docs.google.com/document/d/1rFHepaXd5ozit2KRwrAg4AI70Wf5cLtScQQs6Aw4mAs/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className='hover:text-blue-500 cursor-pointer hover:underline'>
            https://docs.google.com/document/d/1rFHepaXd5ozit2KRwrAg4AI70Wf5cLtScQQs6Aw4mAs/edit?usp=sharing
          </a>
        </p> <br />

        <p className='p-2 bg-[#D8F999] border-t border-t-[#62748E] border-b border-b-[#62748E]'>
          <span className='font-bold'>💡Importante:</span> <br />
          En las últimas actualizaciones el nodo de "text classiffier" empezó a generar errores y las ejecuciones se traban en este nodo, para solucionar hemos creado un tutorial que está en la
          sección de "dudas frecuentes de alumnos" de este curso. <br /> <br />
          Si este nodo te da problemas, te recomiendo ir a ese video directamente y hacer el paso a paso.
        </p> <br />
        <button onClick={() => setIndex(35)} className='ml-2 text-blue-500 cursor-pointer text-start underline'>
          Clic acá para ir directo a la clase</button>

      </>
    },
    {
      titulo: "Envío de imágenes y videos", link: "https://www.youtube.com/embed/baERMnE0REY?si=2gAPOy4Lekx1uQGN",
      descripcion: <>
        En este video te explicamos cómo enviar imágenes y videos a tus clientes automáticamente. <br /> <br />
        <p>
          Herramienta para comprimir videos:
          <a href="https://www.freeconvert.com/es/video-compressor" target="_blank" rel="noopener noreferrer" className='ml-2 hover:text-blue-500 cursor-pointer hover:underline'>
            https://www.freeconvert.com/es/video-compressor
          </a> <br />
        </p>
      </>

    },
    {
      titulo: "Cómo hacer para que el agente reconozca imágenes", link: "https://www.youtube.com/embed/rZnT_YMeClw?si=G38Rg1Ofp-2rLGjv",
      descripcion: <><p>En este video te explicamos cómo hacer para que el agente reconozca imágenes.</p> <br />
        <p className='font-bold text-center text-[25px]'>Prompt de ejemplo ⬇️⬇️</p>
        <p className='text-center'>
          <a href="https://docs.google.com/document/d/1GrZWIMvYKGsp1qIkABolr4qu1yehqlt5kSnsjMfb7eU/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className='hover:text-blue-500 cursor-pointer hover:underline'>
            https://docs.google.com/document/d/1GrZWIMvYKGsp1qIkABolr4qu1yehqlt5kSnsjMfb7eU/edit?usp=sharing
          </a>
        </p>

      </>
    },
    {
      titulo: "Instalación de Postgres para memoria a largo plazo", link: "https://www.youtube.com/embed/jVI6fKcNkHo?si=X4pAIHhwx53cqKkc",
      descripcion: <><p>En este video te explicamos cómo hacer para que el agente reconozca imágenes.</p> <br />

      </>
    },
    {
      titulo: "Seguimientos automáticos", link: "https://www.youtube.com/embed/MZSm7KM-EAU?si=TOhVxGnkj0Qcm-zf", link2: "https://www.youtube.com/embed/FWacV0EWkkM?si=T7Ii9Lo9L-pQolYY",
      descripcion: <><p>En este video aprenderás a crear un bot para que envíe seguimientos automáticos a tus clientes.</p></>
    },
    {
      titulo: "Agentes diferenciados para cada canal de comunicación", link: "https://www.youtube.com/embed/BoEpcDpOPn4?si=Nf14kWoGECy-IdLv",
      descripcion: <><p>En este video aprenderás a crear agentes diferenciados para cada canal de comunicación.</p></>
    },
    {
      titulo: "Cómo crear buffer de mensajes para evitar múltiples respuestas", link: "https://www.youtube.com/embed/BoEpcDpOPn4?si=Nf14kWoGECy-IdLv",
      descripcion: <>
        <p>En este video aprenderás a crear un buffer de mensajes para evitar múltiples respuestas.</p> <br />
        <p className='font-bold text-center text-[25px]'>Descarga el flujo para buffer de mensajes de esta carpeta ⬇️</p>
        <p className='text-center'>
          <a href="https://drive.google.com/file/d/1IPPDp2_JwYA7CBEdT2r75yiBQbCto7Qe/view?usp=sharing" target="_blank" rel="noopener noreferrer" className='hover:text-blue-500 cursor-pointer hover:underline'>
            https://drive.google.com/file/d/1IPPDp2_JwYA7CBEdT2r75yiBQbCto7Qe/view?usp=sharing
          </a>
        </p>
      </>
    },
    {
      titulo: "Cómo verificar superposición para agendamientos de citas", link: "https://www.youtube.com/embed/HpJ2TJn5n0w?si=DxeGoQJrZOyi4i1L",
      descripcion: <>
        <p>En este video aprenderás a crear un bot para verificar superposición para agendamientos de citas. <br /> <br />
          <span className="font-bold">Ejemplo de prompt:</span>
        </p> <br />

        <textarea name="" id="" block className='w-full h-[330px] p-2' disabled value={"El día de hoy es {{ $now }} , ten en cuenta a la hora de agendar" + "\n\n" + "Tarea:" + "\n" + "Tu puedes agendar citas, para agendar la cita del usuario utiliza la herramienta \"agendar cita\"." + "\n\n" + "## Agenda de Cita" + "\n" + "- Cada cita que programes tiene una duración de 1 hora." + "\n" + "- El usuario puede cancelar su cita si así lo requiere." + "\n" + "- No empalmes eventos. Si la fecha y hora del evento que quiere el usuario se empalma con otro, recomiéndale la hora más cercana." + "\n" + "- Los usuarios solo pueden agendar de lunes a viernes de 8 a 16 hs."}></textarea>
      </>
    },

    {
      titulo: "Sistemas multiagentes de IA (flujo descargable)", link: "https://www.youtube.com/embed/_uxs_zvW-2c?si=qQ2nUizLgBUn7Has",
      descripcion: <>
        <p> En este video aprenderás a crear un sistema multiagentes de IA.</p> <br />
        <p className='font-bold text-center text-[25px]'>Descarga el json para subir y adaptar ⬇️</p>
        <p className='text-center'>
          <a href="https://drive.google.com/file/d/11OV76uWTqxZH3dK6nVlN_XytrZHzVcwm/view?usp=sharing" target="_blank" rel="noopener noreferrer" className='hover:text-blue-500 cursor-pointer hover:underline'>
            https://drive.google.com/file/d/11OV76uWTqxZH3dK6nVlN_XytrZHzVcwm/view?usp=sharing
          </a>
        </p>
      </>
    },
    {
      titulo: "Analista de sentimientos", link: "https://www.youtube.com/embed/cPvrny5WV_E?si=PWHt8tnwjciI572C",
      descripcion: <><p>En este video aprenderás a crear un agente IA analista de sentimientos.</p> <br />

      </>
    },
    {
      titulo: "Cambios en N8N 2.0", link: "https://www.youtube.com/embed/YpSBDqPZ8J8?si=dVxPET155zksktS-",
      descripcion: <>
        <p>
          Si querés sabér como montar n8n en un servidor propio y mantenerlo anctualizado a la última versión dale clic al enlace que te lleva directo a la clase:
          <button onClick={() => setIndex(6)} className='ml-2 font-bold text-blue-500 cursor-pointer hover:underline'>
            clic acá
          </button>
        </p>
      </>
    },
    {
      titulo: "Instancia de N8N con problemas de acceso en VPS", link: "https://www.youtube.com/embed/6H4GErSbuYM?si=RDXUcNI65ZceyzCz",
      descripcion: <><p>En este clase vemos cómo resolber problemas de n8n dentro del VPS.</p> <br />

      </>
    },
    {
      titulo: "Error en clasificador de texto", link: "https://www.youtube.com/embed/F63JpkAoG_g?si=TpOBzlyehlukP-9f",
      descripcion: <><p>En este clase vemos cómo resolber problemas en el clasificador de texto.</p> <br />

      </>
    },
    {
      titulo: "Personalización de mensajes", link: "https://www.youtube.com/embed/NIRdz4q8VPI?si=w19hpyoxJrU0Dsxe",
      descripcion: <><p>En este clase vemos cómo personalizar los mensajes de n8n.</p> <br />

      </>
    },

    // asd------------------------------------------------------------------------------------------------------------------------------------
    {
      titulo: "Error en nodo Get Token", link: "https://www.youtube.com/embed/JZh6o4q_BI4?si=oyqJsUqJFKU83Xyu",
      descripcion: <><p>En este clase vemos cómo resolber problemas en el nodo Get Token.</p> <br />

        <p>
          Descarga el json desde acá (esta versión ya puede enviar saltos de línea):
          <a href="https://drive.google.com/file/d/19TF4uBabI0GOrfGE7xPUOWF1se31j4Fe/view?usp=sharing" target="_blank" rel="noopener noreferrer" className='ml-2 hover:text-blue-500 cursor-pointer hover:underline'>
            https://drive.google.com/file/d/19TF4uBabI0GOrfGE7xPUOWF1se31j4Fe/view?usp=sharing
          </a>
        </p> <br />

        <p>
          Enlace a la documentación de Kommo:
          <a href="https://developers.kommo.com/reference/kommo-api-reference" target="_blank" rel="noopener noreferrer" className='ml-2 hover:text-blue-500 cursor-pointer hover:underline'>
            https://developers.kommo.com/reference/kommo-api-reference
          </a>
        </p>

      </>
    },
    {
      titulo: "Cómo crear una request desde la documentación de Kommo - Disparo de bot (clase avanzada)", link: "https://www.youtube.com/embed/9DaIGGQqiNo?si=D0LL6Dxx5hPj4ctj",
      descripcion: <>
        <p>En este video te explicamos cómo crear una request desde la documentación de Kommo - Disparo de bot (clase avanzada).</p> <br /> <br />
        <p>
          Documentación de Kommo:
          <a href="https://developers.kommo.com/docs/kommo-for-developers" target="_blank" rel="noopener noreferrer" className='ml-2 hover:text-blue-500 cursor-pointer hover:underline'>
            https://developers.kommo.com/docs/kommo-for-developers
          </a> <br />
        </p>
      </>

    },
    {
      titulo: "MVP flujo base para ofrecer consultorías (flujo descargable)", link: "https://www.youtube.com/embed/bGL3gPwHVSI?si=1qn6Ac8cn18p1Cii",
      descripcion: <>
        <p> En este video aprenderás a crear un MVP flujo base para ofrecer consultorías (flujo descargable).</p> <br />
        <p className='font-bold text-center text-[25px]'>Descarga el json ⬇️⬇️</p>
        <p className='text-center'>
          <a href="https://drive.google.com/file/d/1PDTlgOs3TDprERNJjfgSgr1jOTpTZPUA/view?usp=sharing" target="_blank" rel="noopener noreferrer" className='hover:text-blue-500 cursor-pointer hover:underline'>
            https://drive.google.com/file/d/1PDTlgOs3TDprERNJjfgSgr1jOTpTZPUA/view?usp=sharing
          </a>
        </p>
      </>
    },
    {
      titulo: "Derivación automática para cada asesor comercial", link: "https://www.youtube.com/embed/txiuyICirfU?si=6_oUqQqlI_k0Z-rH",
      descripcion: <><p>En este video aprenderás a crear una derivación automática para cada asesor comercial.</p> <br />

      </>
    },





  ])

  const [index, setIndex] = useState(0)

  return (
    <>
      <div className=' w-full min-h-screen bg-[#F2F2F3]'>
        <h1 className='text-[45px] text-[#4E4E55] my-6 font-bold text-center'>
          Automatización de ventas
        </h1>


        <div id='navMasContenido' className='flex flex-row justify-around'>

          <div id='nav' className='bg-white relative border border-[#D6D3D1] shadow-sm sticky top-10 w-[30%] h-[85vh] py-3 rounded-lg'>


            <div className=' flex flex-col items-center justify-center gap-2 my-4'>
              <img src={Logo} className='w-[100px] h-[100px] object-cover rounded-full' alt="" />
              <p className='text-[25px] font-bold text-[#4E4E55]'>León Group</p>
            </div>


            <div className='h-[78%] overflow-y-auto'>
              {/* ----------------------------------------------------------- GRUPOS DE LINKS ------------------------------------------------------- */}
              <div className=' p-4 flex flex-col gap-2 rounded-lg'>



                <div className={`bg-[#F7FEE7] rounded-lg border border-[#D6D3D1] p-2 ${show1 ? "h-[80px]" : "h-[42px]"} overflow-hidden transition-all duration-400`}>
                  <div className='flex flex-row mb-2 items-center gap-2 hover:text-blue-500 cursor-pointer' onClick={() => setShow1(!show1)}>
                    <i className={`${show1 ? "fa-solid fa-angle-up" : "fa-solid fa-angle-down"} transition-all duration-300`}></i>
                    <p className='text-[18px] font-bold text-[#4E4E55] hover:text-blue-500'>Inicio</p>
                  </div>
                  <button onClick={() => setIndex(0)} className='text-lg text-[#4E4E55] font-semibold ml-7 hover:text-blue-500 cursor-pointer text-start'>Presentación</button>
                </div>


                <div className={`bg-[#F7FEE7] rounded-lg border border-[#D6D3D1] p-2 flex flex-col ${show2 ? "h-[190px]" : "h-[42px]"} overflow-hidden transition-all duration-400`}>
                  <div className='flex flex-row mb-2 items-center gap-2 hover:text-blue-500 cursor-pointer' onClick={() => setShow2(!show2)}>
                    <i className={`${show2 ? "fa-solid fa-angle-up" : "fa-solid fa-angle-down"} transition-all duration-300`}></i>
                    <p className='text-[18px] font-bold text-[#4E4E55] hover:text-blue-500'>Implementa Kommo en tu sistema comercial</p>
                  </div>

                  <div className='flex flex-col gap-2'>
                    <button onClick={() => setIndex(1)} className='text-lg text-[#4E4E55] font-semibold ml-7 hover:text-blue-500 cursor-pointer text-start'>Creación de la cuenta de Kommo</button>
                    <button onClick={() => setIndex(2)} className='text-lg text-[#4E4E55] font-semibold ml-7 hover:text-blue-500 cursor-pointer text-start'>Conexión de canles de venta en Kommo</button>
                    <button onClick={() => setIndex(3)} className='text-lg text-[#4E4E55] font-semibold ml-7 hover:text-blue-500 cursor-pointer text-start'>Guia de WhatsApp API</button>
                    <button onClick={() => setIndex(4)} className='text-lg text-[#4E4E55] font-semibold ml-7 hover:text-blue-500 cursor-pointer text-start'>Cómo conectar WhatsApp Lite en Kommo (QR)</button>
                  </div>
                </div>


                <div className={`bg-[#F7FEE7] rounded-lg border border-[#D6D3D1] flex flex-col p-2 ${show3 ? "h-[140px]" : "h-[42px]"} overflow-hidden transition-all duration-400`}>
                  <div className='flex flex-row mb-2 items-center gap-2 hover:text-blue-500 cursor-pointer' onClick={() => setShow3(!show3)}>
                    <i className={`${show3 ? "fa-solid fa-angle-up" : "fa-solid fa-angle-down"} transition-all duration-300`}></i>
                    <p className='text-[18px] font-bold text-[#4E4E55] hover:text-blue-500'>Implementa N8N en tu sistema comercial</p>
                  </div>

                  <div className='flex flex-col gap-2'>
                    <button onClick={() => setIndex(5)} className='text-lg text-[#4E4E55] font-semibold ml-7 hover:text-blue-500 cursor-pointer text-start'>Creación de usuario y breve recorrido de N8N</button>
                    <button onClick={() => setIndex(6)} className='text-lg text-[#4E4E55] font-semibold ml-7 hover:text-blue-500 cursor-pointer text-start'>Cómo montar N8N en un servidor VPS propio</button>
                  </div>
                </div>



                <div className={`bg-[#F7FEE7] rounded-lg border border-[#D6D3D1] flex flex-col p-2 ${show4 ? "h-[340px]" : "h-[42px]"} overflow-hidden transition-all duration-400`}>
                  <div className='flex flex-row mb-2 items-center gap-2 hover:text-blue-500 cursor-pointer' onClick={() => setShow4(!show4)}>
                    <i className={`${show4 ? "fa-solid fa-angle-up" : "fa-solid fa-angle-down"} transition-all duration-300`}></i>
                    <p className='text-[18px] font-bold text-[#4E4E55] hover:text-blue-500'>Conexiones de canales y plataformas</p>
                  </div>

                  <div className='flex flex-col gap-2'>
                    <button onClick={() => setIndex(7)} className='text-lg text-[#4E4E55] font-semibold ml-7 hover:text-blue-500 cursor-pointer text-start'>Conexión entre plataformas</button>
                    <button onClick={() => setIndex(8)} className='text-lg text-[#4E4E55] font-semibold ml-7 hover:text-blue-500 cursor-pointer text-start'>Conexión entre Kommo y N8N</button>
                    <button onClick={() => setIndex(9)} className='text-lg text-[#4E4E55] font-semibold ml-7 hover:text-blue-500 cursor-pointer text-start'>Copias de seguridad</button>
                    <button onClick={() => setIndex(10)} className='text-lg text-[#4E4E55] font-semibold ml-7 hover:text-blue-500 cursor-pointer text-start'>Primerso pasos, pruebas y errores frecuentes</button>
                    <button onClick={() => setIndex(11)} className='text-lg text-[#4E4E55] font-semibold ml-7 hover:text-blue-500 cursor-pointer text-start'>Pruebas de funcionamiento en N8N</button>
                    <button onClick={() => setIndex(12)} className='text-lg text-[#4E4E55] font-semibold ml-7 hover:text-blue-500 cursor-pointer text-start'>Conecta el agente a OpenAI</button>
                    <button onClick={() => setIndex(13)} className='text-lg text-[#4E4E55] font-semibold ml-7 hover:text-blue-500 cursor-pointer text-start'>Conexiones con Google</button>
                    <button onClick={() => setIndex(14)} className='text-lg text-[#4E4E55] font-semibold ml-7 hover:text-blue-500 cursor-pointer text-start'>Conexión con base de datos en Supabase</button>
                  </div>
                </div>



                <div className={`bg-[#F7FEE7] rounded-lg border border-[#D6D3D1] flex flex-col p-2 ${show5 ? "h-[240px]" : "h-[42px]"} overflow-hidden transition-all duration-400`}>
                  <div className='flex flex-row mb-2 items-center gap-2 hover:text-blue-500 cursor-pointer' onClick={() => setShow5(!show5)}>
                    <i className={`${show5 ? "fa-solid fa-angle-up" : "fa-solid fa-angle-down"} transition-all duration-300`}></i>
                    <p className='text-[18px] font-bold text-[#4E4E55] hover:text-blue-500'>Comportamiento y gestión del agente de IA</p>
                  </div>

                  <div className='flex flex-col gap-2'>
                    <button onClick={() => setIndex(15)} className='text-lg text-[#4E4E55] font-semibold ml-7 hover:text-blue-500 cursor-pointer text-start'>Costos</button>
                    <button onClick={() => setIndex(16)} className='text-lg text-[#4E4E55] font-semibold ml-7 hover:text-blue-500 cursor-pointer text-start'>Movimiento de columna automático dentro del CRM</button>
                    <button onClick={() => setIndex(17)} className='text-lg text-[#4E4E55] font-semibold ml-7 hover:text-blue-500 cursor-pointer text-start'>Transcripción de audio a texto</button>
                    <button onClick={() => setIndex(18)} className='text-lg text-[#4E4E55] font-semibold ml-7 hover:text-blue-500 cursor-pointer text-start'>Reset de memoria</button>
                    <button onClick={() => setIndex(19)} className='text-lg text-[#4E4E55] font-semibold ml-7 hover:text-blue-500 cursor-pointer text-start'>Que tu agente pueda rebatir objeciones</button>
                  </div>
                </div>



                <div className={`bg-[#F7FEE7] rounded-lg border border-[#D6D3D1] flex flex-col p-2 ${show6 ? "h-[310px]" : "h-[42px]"} overflow-hidden transition-all duration-400`}>
                  <div className='flex flex-row mb-2 items-center gap-2 hover:text-blue-500 cursor-pointer' onClick={() => setShow6(!show6)}>
                    <i className={`${show6 ? "fa-solid fa-angle-up" : "fa-solid fa-angle-down"} transition-all duration-300`}></i>
                    <p className='text-[18px] font-bold text-[#4E4E55] hover:text-blue-500'>Funciones principales del agente de IA</p>
                  </div>

                  <div className='flex flex-col gap-2'>
                    <button onClick={() => setIndex(20)} className='text-lg text-[#4E4E55] font-semibold ml-7 hover:text-blue-500 cursor-pointer text-start'>Sheets como base de datos de productos</button>
                    <button onClick={() => setIndex(21)} className='text-lg text-[#4E4E55] font-semibold ml-7 hover:text-blue-500 cursor-pointer text-start'>Cómo crear y gestionar bases de datos vectorial (RAG)</button>
                    <button onClick={() => setIndex(22)} className='text-lg text-[#4E4E55] font-semibold ml-7 hover:text-blue-500 cursor-pointer text-start'>Agendamiento automático de citas en Google Calendar</button>
                    <button onClick={() => setIndex(23)} className='text-lg text-[#4E4E55] font-semibold ml-7 hover:text-blue-500 cursor-pointer text-start'>Categorizador automático</button>
                    <button onClick={() => setIndex(24)} className='text-lg text-[#4E4E55] font-semibold ml-7 hover:text-blue-500 cursor-pointer text-start'>Envío de imágenes y videos</button>
                    <button onClick={() => setIndex(25)} className='text-lg text-[#4E4E55] font-semibold ml-7 hover:text-blue-500 cursor-pointer text-start'>Cómo hacer para que el agente reconozca imágenes</button>
                    <button onClick={() => setIndex(26)} className='text-lg text-[#4E4E55] font-semibold ml-7 hover:text-blue-500 cursor-pointer text-start'>Instalación de Postgres para memoria a largo plazo</button>
                  </div>
                </div>



                <div className={`bg-[#F7FEE7] rounded-lg border border-[#D6D3D1] flex flex-col p-2 ${show7 ? "h-[140px]" : "h-[42px]"} overflow-hidden transition-all duration-400`}>
                  <div className='flex flex-row mb-2 items-center gap-2 hover:text-blue-500 cursor-pointer' onClick={() => setShow7(!show7)}>
                    <i className={`${show7 ? "fa-solid fa-angle-up" : "fa-solid fa-angle-down"} transition-all duration-300`}></i>
                    <p className='text-[18px] font-bold text-[#4E4E55] hover:text-blue-500'>Automatización del proceso comercial</p>
                  </div>

                  <div className='flex flex-col gap-2'>
                    <button onClick={() => setIndex(27)} className='text-lg text-[#4E4E55] font-semibold ml-7 hover:text-blue-500 cursor-pointer text-start'>Seguimientos automáticos</button>
                    <button onClick={() => setIndex(28)} className='text-lg text-[#4E4E55] font-semibold ml-7 hover:text-blue-500 cursor-pointer text-start'>Agentes diferenciados para cada canal de comunicación</button>
                  </div>
                </div>




                <div className={`bg-[#F7FEE7] rounded-lg border border-[#D6D3D1] flex flex-col p-2 ${show8 ? "h-[280px]" : "h-[42px]"} overflow-hidden transition-all duration-400`}>
                  <div className='flex flex-row mb-2 items-center gap-2 hover:text-blue-500 cursor-pointer' onClick={() => setShow8(!show8)}>
                    <i className={`${show8 ? "fa-solid fa-angle-up" : "fa-solid fa-angle-down"} transition-all duration-300`}></i>
                    <p className='text-[18px] font-bold text-[#4E4E55] hover:text-blue-500'>Actualizaciones</p>
                  </div>

                  <div className='flex flex-col gap-2'>
                    <button onClick={() => setIndex(29)} className='text-lg text-[#4E4E55] font-semibold ml-7 hover:text-blue-500 cursor-pointer text-start'>Cómo crear buffer de mensajes para evitar múltiples respuestas</button>
                    <button onClick={() => setIndex(30)} className='text-lg text-[#4E4E55] font-semibold ml-7 hover:text-blue-500 cursor-pointer text-start'>Cómo verificar superposición para agendamientos de citas</button>
                    <button onClick={() => setIndex(31)} className='text-lg text-[#4E4E55] font-semibold ml-7 hover:text-blue-500 cursor-pointer text-start'>Sistemas multiagentes de IA (flujo descargable)</button>
                    <button onClick={() => setIndex(32)} className='text-lg text-[#4E4E55] font-semibold ml-7 hover:text-blue-500 cursor-pointer text-start'>Analista de sentimientos</button>
                    <button onClick={() => setIndex(33)} className='text-lg text-[#4E4E55] font-semibold ml-7 hover:text-blue-500 cursor-pointer text-start'>Cambios en N8N 2.0</button>
                  </div>
                </div>




                <div className={`bg-[#F7FEE7] rounded-lg border border-[#D6D3D1] flex flex-col p-2 ${show9 ? "h-[200px]" : "h-[42px]"} overflow-hidden transition-all duration-400`}>
                  <div className='flex flex-row mb-2 items-center gap-2 hover:text-blue-500 cursor-pointer' onClick={() => setShow9(!show9)}>
                    <i className={`${show9 ? "fa-solid fa-angle-up" : "fa-solid fa-angle-down"} transition-all duration-300`}></i>
                    <p className='text-[18px] font-bold text-[#4E4E55] hover:text-blue-500'>Dudas frecuentes de alumnos</p>
                  </div>

                  <div className='flex flex-col gap-2'>
                    <button onClick={() => setIndex(34)} className='text-lg text-[#4E4E55] font-semibold ml-7 hover:text-blue-500 cursor-pointer text-start'>Instancia de N8N con problemas de acceso en VPS</button>
                    <button onClick={() => setIndex(35)} className='text-lg text-[#4E4E55] font-semibold ml-7 hover:text-blue-500 cursor-pointer text-start'>Error en clasificador de texto</button>
                    <button onClick={() => setIndex(36)} className='text-lg text-[#4E4E55] font-semibold ml-7 hover:text-blue-500 cursor-pointer text-start'>Personalización de mensajes</button>
                    <button onClick={() => setIndex(37)} className='text-lg text-[#4E4E55] font-semibold ml-7 hover:text-blue-500 cursor-pointer text-start'>Error en nodo Get Token</button>
                  </div>
                </div>




                <div className={`bg-[#F7FEE7] rounded-lg border border-[#D6D3D1] flex flex-col p-2 ${show10 ? "h-[210px]" : "h-[42px]"} overflow-hidden transition-all duration-400`}>
                  <div className='flex flex-row mb-2 items-center gap-2 hover:text-blue-500 cursor-pointer' onClick={() => setShow10(!show10)}>
                    <i className={`${show10 ? "fa-solid fa-angle-up" : "fa-solid fa-angle-down"} transition-all duration-300`}></i>
                    <p className='text-[18px] font-bold text-[#4E4E55] hover:text-blue-500'>Bonus</p>
                  </div>

                  <div className='flex flex-col gap-2'>
                    <button onClick={() => setIndex(38)} className='text-lg text-[#4E4E55] font-semibold ml-7 hover:text-blue-500 cursor-pointer text-start'>Cómo crear una request desde la documentación de Kommo - Disparo de bot (clase avanzada)</button>
                    <button onClick={() => setIndex(39)} className='text-lg text-[#4E4E55] font-semibold ml-7 hover:text-blue-500 cursor-pointer text-start'>MVP flujo base para ofrecer consultorías (flujo descargable)</button>
                    <button onClick={() => setIndex(40)} className='text-lg text-[#4E4E55] font-semibold ml-7 hover:text-blue-500 cursor-pointer text-start'>Derivación automática para cada asesor comercial</button>
                  </div>
                </div>


              </div>
              {/* ----------------------------------------------------------- GRUPOS DE LINKS ------------------------------------------------------- */}
            </div>


          </div>

          <div id='contenido' className='mb-[80px] border border-[#D6D3D1] shadow-sm w-[65%] rounded-lg bg-white p-4 flex flex-col gap-2 justify-center items-center'>
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
                  <img className='w-[90%] h-[600px] object-contain' key={index} src={imagen.link} alt={imagen.titulo} />
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
