import React from 'react'
import { useNavigate } from 'react-router-dom'
import ExportToExcel from './ExportToExcel'

function SGCListaEmpleados(props) {
    const { data } = props
    const navigate = useNavigate()
    return (
        <div class="table-responsive">
            <table class="table table-striped
        table-hover	
        table-borderless
        table-primary
        align-middle">
                <thead class="table-light">
                    <tr>
                        <th>ID</th>
                        <th>NOMBRES</th>
                        <th>Apellido paterno</th>
                        <th>Apellido Materno</th>
                        <th>Estatus</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody class="table-group-divider">

                    {
                        data.map((el, idx) =>
                            <tr className='table-primary'>
                                <td>{el.id}</td>
                                <td>{el.nombres}</td>
                                <td>{el.apellido_paterno}</td>
                                <td>{el.apellido_materno}</td>
                                <td>{el.estatus}</td>
                                <td><button className='btn btn-secondary' onClick={() => navigate(`/sgc/detalles/${el.id}`)}>Detalles</button></td>
                                <td><ExportToExcel data={el} /></td>
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