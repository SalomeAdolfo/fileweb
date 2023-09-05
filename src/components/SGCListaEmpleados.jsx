import React from 'react'
import { useNavigate } from 'react-router-dom'

function SGCListaEmpleados(props) {
    const { data, parent } = props
    const navigate = useNavigate()
    return (
        <div className="table-responsive">
            <table className="table table-striped
        table-hover	
        table-borderless
        table-primary
        align-middle">
                <thead className="table-light">
                    <tr>
                        <th>Puesto</th>
                        <th>Localidad</th>
                        <th>Nombre empleado</th>
                        <th>Fecha Cumpleaños</th>
                        <th>Fecha registro</th>
                        <th>Estatus</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody className="table-group-divider">

                    {
                        data.map((el, idx) =>
                            <tr key={idx} className='table-primary'>

                                {parent === 'Birth' ? (
                                    <>
                                        <td>{el.puesto}</td>
                                        <td>{el.localidad}</td>
                                        <td>{el.nombres + " " + el.apellido_paterno + " " + el.apellido_materno}</td>
                                        <td>{el.fecha_nacimiento}</td>
                                        <td>{el.fecha_registro}</td>
                                    </>
                                ) : null}

                                <td><button className='btn btn-secondary' onClick={() => navigate(`/sgc/detalles/${el.id}`)}>Detalles</button></td>
                            </tr>
                        )
                    }
                </tbody>
                <tfoot>

                </tfoot>
            </table>
        </div>

    )
}

export default SGCListaEmpleados