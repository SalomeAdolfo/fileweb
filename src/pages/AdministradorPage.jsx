import React from 'react'
import { url } from '../constants/route'
import '../styles/FilesStyles.css'

function AdministradorPage() {
  const [data, setData] = React.useState([])
  React.useEffect(() => {
    async function initFiles() {
      const response = await fetch(`${url}folders/list`)
      if (response.ok) {
        const json = await response.json()
        setData(json)
      }
    }
    initFiles()
  }, [])
  async function createFolder() {
    var name = prompt('Dame el nombre de la carpeta')
    const response = await fetch(`${url}folders/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': window.sessionStorage.getItem('token')
      },
      body: JSON.stringify({
        name: name
      })
    })
    if (response.ok) {
      window.alert(`Carpeta ${name} creada correctamente`)
      window.location.reload()
    }
  }
  return (
    <div>
      <h1 className='fw-bold text-center m-5'>Files</h1>
      <div className='grid_container'>
        {
          data ? (<>
            {
              data.map((el, idx) =>
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 64 64"
                    width="64"
                    height="64"
                    fill="#000000"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path d="M12,6a2,2,0,0,0-2,2V56a2,2,0,0,0,2,2H52a2,2,0,0,0,2-2V8a2,2,0,0,0-2-2ZM52,56H12V54H52ZM52,50H12V20H52Z" />
                    </g>
                  </svg>
                  <a key={idx} href={`/folder/${el}`}>{el}</a>
                </>)
            }
          </>) :  <p>No hay nada aún</p>}
      </div>
      <button onClick={() => createFolder()}>Crear carpeta</button>
    </div>
  )
}

export default AdministradorPage