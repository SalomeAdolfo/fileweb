import React from 'react'
import { useNavigate } from 'react-router-dom'

function SGCListaEmpleados(props) {
    const { data } = props
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
                        <th>ID</th>
                        <th>NOMBRES</th>
                        <th>Apellido paterno</th>
                        <th>Apellido Materno</th>
                        <th>Localidad</th>
                        <th>Estatus</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody className="table-group-divider">

                    {
                        data.map((el, idx) =>
                            <tr key={idx} className='table-primary'>
                                <td>{el.id}</td>
                                <td>{el.nombres}</td>
                                <td>{el.apellido_paterno}</td>
                                <td>{el.apellido_materno}</td>
                                <td>{el.localidad}</td>
                                <td>{el.estatus}</td>
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