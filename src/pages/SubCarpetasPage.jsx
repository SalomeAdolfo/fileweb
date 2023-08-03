import React from 'react'
import { useParams } from 'react-router-dom'
import { url } from '../constants/route'
import '../styles/FilesStyles.css'
function SubCarpetasPage() {

    const { backFolder } = useParams()
    const [data, setData] = React.useState([])
    React.useEffect(() => {
        async function getList() {
            const res = await fetch(`${url}folders/fileList/${backFolder}`)
            if (res.ok) {
                const json = await res.json()
                setData(json)
            }
        }
        getList()
    }, [])

    const [selectedFile, setSelectedFile] = React.useState(null);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Aquí puedes hacer la solicitud para subir el archivo a tu API utilizando fetch() o alguna biblioteca como axios.
        // Asegúrate de configurar correctamente la URL y los headers para enviar el archivo al servidor.

        const formData = new FormData();
        formData.append('file', selectedFile);

        fetch(`${url}folders/addfile/${backFolder}`, {
            method: 'POST',
            body: formData,
        })
            .then((response) => response.json())
            .then((data) => {
                // Aquí puedes manejar la respuesta del servidor después de cargar el archivo, si es necesario.
                console.log(data);
            })
            .catch((error) => {
                // Manejo de errores
                console.error(error);
            });
    };
    function downloadFile(ruta) {
        fetch(`${url}folders/list/${ruta}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.blob(); // Se espera una respuesta en formato blob
            })
            .then((blob) => {
                // Manejo del blob, por ejemplo, descarga o visualización
                const url = URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = url;
                link.download = 'archivo.pdf';
                link.click();
                URL.revokeObjectURL(url);
            })
            .catch((error) => {
                console.error('Error fetching file:', error);
            });
    }
    return (
        <section>
            <div className='grid_container'>
                {
                    data.files ? (data.files.map((el, idx) =>
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
                            <>
                                {el.includes('.pdf') || el.includes('.pptx') || el.includes('.txt') ? (<i className='download_file' onClick={() => downloadFile(`${backFolder}-${el}`)}>Descargar {el}</i>) : (<a href={`/folder/${backFolder}-${el}`} key={idx}>{el}</a>)}
                            </>
                        </>
                    )) : <p>No hay nada aún</p>
                }
            </div>
            <form onSubmit={handleSubmit}>
                <input type="file" onChange={handleFileChange} />
                <button type="submit">Subir archivo</button>
            </form>
        </section>
    )
}

export default SubCarpetasPage