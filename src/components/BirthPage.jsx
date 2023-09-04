import React from 'react'
import { url } from '../constants/route'
import SGCListaEmpleados from './SGCListaEmpleados'

function BirthPage() {
    const mesesList = [['Enero', 1], ['Febrero', 2], ['Marzo', 3], ['Abril', 4], ['Mayo', 5], ['Junio', 6], ['Julio', 7], ['Agosto', 8], ['Septiembre', 9], ['Octubre', 10], ['Noviembre', 11], ['Diciembre', 12]]
    const [data, setData] = React.useState([])
    const [filteredPerson, setFilteredPerson] = React.useState([])
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
    function filtrarPorMes(mes) {
        // Convierte el mes a número (enero=0, febrero=1, marzo=2, etc.)
        // Filtra el array para obtener las personas que nacieron en el mes especificado
        const personasFiltradas = data.filter(persona => {
            const fechaNacimiento = new Date(persona.fecha_nacimiento);
            return fechaNacimiento.getMonth() + 1 === mes;
        });


        setFilteredPerson(personasFiltradas)
    }

    // Ejemplo de uso: filtrar personas nacidas en marzo
    return (
        <section style={{ display: 'flex', flexDirection: 'column' }}>
            <div class="btn-group" role="group" aria-label="Basic example">
                {
                    mesesList.map((el, idx) =>
                        <button onClick={() => filtrarPorMes(el[1])} key={idx} type="button" class="btn btn-primary">{el[0]}</button>
                    )
                }
            </div>

            <SGCListaEmpleados data={filteredPerson} />

        </section>
    )
}

export default BirthPage