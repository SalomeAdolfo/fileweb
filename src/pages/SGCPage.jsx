import React from 'react'
import { url } from '../constants/route'
import { useNavigate } from 'react-router-dom'
import ExportToExcel from '../components/ExportToExcel'
import '../styles/SGCStyles.css'

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
    //            <SGCListaEmpleados data={data} />
    // const menuitems = ['Cumpleaños', 'Alta de empleados', 'Contratos', 'Actas administrativas', 'SGC', 'Vacaciones']
    //const mesesList = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre']
    return (
        <div className='container-fluid mt-5'>
            <h1 className='text-center fw-bold'>Bienvenido</h1>
            {/* <ExportToExcel data={data} /> */}
            <div className='mesesContainer mt-5'>
                <button onClick={() => navigate('/sgc/nuevo')}>Alta de empleados</button>
                <button onClick={() => navigate('/sgc/birthdays')}>Cumpleaños</button >
                <button>Contratos</button >
                <button>Actas administrativas</button >
                <button>SGC</button>
                <button>Vacaciones</button>

            </div>
        </div >
    )
}

export default SGCPage