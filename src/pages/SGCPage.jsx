import React from 'react'
import SGCListaEmpleados from '../components/SGCListaEmpleados'
import { url } from '../constants/route'
import { useNavigate } from 'react-router-dom'

function SGCPage() {
    const navigate = useNavigate()
    const [data, setData] = React.useState([])
    React.useEffect(() => {
        async function getEmpleados() {
            const res = await fetch(`${url}empleados/listaEmpleados`, {
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            if (res.ok) {
                const json = await res.json()
                setData(json)
            }
        }
        try {
            getEmpleados()
        } catch (error) {

        }
    }, [])
    return (
        <div className='container-fluid'>
            <button className='btn btn-primary' onClick={() => navigate('/sgc/nuevo')}>Crear empleado</button>
            <SGCListaEmpleados data={data} />
        </div>
    )
}

export default SGCPage