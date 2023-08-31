import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { url } from '../constants/route';

const FormEmpleado = () => {
    const [formData, setFormData] = useState({
        fecha_registro: '',
        estatus: '',
        fecha_baja: '',
        motivo_baja: '',
        empresa: '',
        localidad: '',
        curp: '',
        apellido_paterno: '',
        apellido_materno: '',
        nombres: '',
        fecha_ingreso: '',
        nss: '',
        rfc: '',
        fecha_nacimiento: '',
        lugar_nacimiento: '',
        direccion: '',
        codigo_postal: '',
        municipio: '',
        estado_civil: '',
        banco: '',
        numero_cuenta: '',
        clave_interbancaria: '',
        correo_electronico: '',
        telefono_colaborador: '',
        beneficiario_emergencia: '',
        parentesco: '',
        numero_beneficiario: '',
        infonavit: '',
        fecha_pago_cumpleanos: '',
        vacaciones_anterior: '',
        vacaciones_actual: '',
        vacaciones_tomadas: '',
        vacaciones_pendientes: '',
        vacaciones_por_pagar: '',
        periodo_contrato: '',
        pago_cumpleanos: '',
        mes_nacimiento: '',
        renovar_contrato: '',
        fecha_termino_contrato: '',
        actas_administrativas: '',
        datos_adjuntos: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        async function postEmpleado (){
            const res = await fetch(`${url}empleados/crearEmpleado`,{
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    ...formData
                })
            })
            if(res.ok){
                alert("Empleado registrado")
            }
            console.log(res.status)
        }
        postEmpleado()
        console.log(formData);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <Form onSubmit={handleSubmit}>
            {/* Campos de formulario */}
            <Form.Group controlId="fecha_registro">
                <Form.Label>Fecha y hora de Registro</Form.Label>
                <Form.Control
                    type="datetime-local"
                    name="fecha_registro"
                    value={formData.fecha_registro}
                    onChange={handleChange}
                    required
                />
            </Form.Group>
            <Form.Group controlId="estatus">
                <Form.Label>Estatus</Form.Label>
                <Form.Control
                    as="select"
                    name="estatus"
                    value={formData.estatus}
                    onChange={handleChange}
                    required
                >
                    <option value="">Seleccione</option>
                    <option value="Alta">Alta</option>
                    <option value="Baja">Baja</option>
                    <option value="Indefinido">Indefinido</option>
                    <option value="Nula">Nula</option>
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="fecha_baja">
                <Form.Label>Fecha de baja</Form.Label>
                <Form.Control
                    type="datetime-local"
                    name="fecha_baja"
                    value={formData.fecha_baja}
                    onChange={handleChange}
                    required
                />
            </Form.Group>

            <Form.Group controlId="motivo_baja">
                <Form.Label>Motivo de la Baja</Form.Label>
                <Form.Control
                    type="text"
                    name="motivo_baja"
                    value={formData.motivo_baja}
                    onChange={handleChange}
                    required
                />
            </Form.Group>

            <Form.Group controlId="empresa">
                <Form.Label>Empresa</Form.Label>
                <Form.Control
                    type="text"
                    name="empresa"
                    value={formData.empresa}
                    onChange={handleChange}
                    required
                />
            </Form.Group>

            <Form.Group controlId="localidad">
                <Form.Label>Localidad</Form.Label>
                <Form.Control
                    type="text"
                    name="localidad"
                    value={formData.localidad}
                    onChange={handleChange}
                    required
                />
            </Form.Group>

            <Form.Group controlId="curp">
                <Form.Label>Clave CURP</Form.Label>
                <Form.Control
                    type="text"
                    name="curp"
                    value={formData.curp}
                    onChange={handleChange}
                    required
                />
            </Form.Group>

            <Form.Group controlId="apellido_paterno">
                <Form.Label>Apellido Paterno</Form.Label>
                <Form.Control
                    type="text"
                    name="apellido_paterno"
                    value={formData.apellido_paterno}
                    onChange={handleChange}
                    required
                />
            </Form.Group>

            <Form.Group controlId="apellido_materno">
                <Form.Label>Apellido Materno</Form.Label>
                <Form.Control
                    type="text"
                    name="apellido_materno"
                    value={formData.apellido_materno}
                    onChange={handleChange}
                    required
                />
            </Form.Group>

            <Form.Group controlId="nombres">
                <Form.Label>Nombres</Form.Label>
                <Form.Control
                    type="text"
                    name="nombres"
                    value={formData.nombres}
                    onChange={handleChange}
                    required
                />
            </Form.Group>

            <Form.Group controlId="fecha_ingreso">
                <Form.Label>Fecha de ingreso</Form.Label>
                <Form.Control
                    type="date"
                    name="fecha_ingreso"
                    value={formData.fecha_ingreso}
                    onChange={handleChange}
                    required
                />
            </Form.Group>

            <Form.Group controlId="nss">
                <Form.Label>NSS</Form.Label>
                <Form.Control
                    type="text"
                    name="nss"
                    value={formData.nss}
                    onChange={handleChange}
                    required
                />
            </Form.Group>

            <Form.Group controlId="rfc">
                <Form.Label>RFC (a 13 dígitos)</Form.Label>
                <Form.Control
                    type="text"
                    name="rfc"
                    value={formData.rfc}
                    onChange={handleChange}
                    required
                />
            </Form.Group>

            <Form.Group controlId="fecha_nacimiento">
                <Form.Label>Fecha de Nacimiento</Form.Label>
                <Form.Control
                    type="date"
                    name="fecha_nacimiento"
                    value={formData.fecha_nacimiento}
                    onChange={handleChange}
                    required
                />
            </Form.Group>

            <Form.Group controlId="lugar_nacimiento">
                <Form.Label>Lugar de Nacimiento</Form.Label>
                <Form.Control
                    type="text"
                    name="lugar_nacimiento"
                    value={formData.lugar_nacimiento}
                    onChange={handleChange}
                    required
                />
            </Form.Group>
            <Form.Group controlId="direccion">
                <Form.Label>Dirección</Form.Label>
                <Form.Control
                    type="text"
                    name="direccion"
                    value={formData.direccion}
                    onChange={handleChange}
                    required
                />
            </Form.Group>

            <Form.Group controlId="codigo_postal">
                <Form.Label>Código Postal</Form.Label>
                <Form.Control
                    type="text"
                    name="codigo_postal"
                    value={formData.codigo_postal}
                    onChange={handleChange}
                    required
                />
            </Form.Group>

            <Form.Group controlId="municipio">
                <Form.Label>Municipio</Form.Label>
                <Form.Control
                    type="text"
                    name="municipio"
                    value={formData.municipio}
                    onChange={handleChange}
                    required
                />
            </Form.Group>

            <Form.Group controlId="estado_civil">
                <Form.Label>Estado Civil</Form.Label>
                <Form.Control
                    type="text"
                    name="estado_civil"
                    value={formData.estado_civil}
                    onChange={handleChange}
                    required
                />
            </Form.Group>

            <Form.Group controlId="banco">
                <Form.Label>Banco</Form.Label>
                <Form.Control
                    type="text"
                    name="banco"
                    value={formData.banco}
                    onChange={handleChange}
                    required
                />
            </Form.Group>

            <Form.Group controlId="numero_cuenta">
                <Form.Label>Número de Cuenta</Form.Label>
                <Form.Control
                    type="text"
                    name="numero_cuenta"
                    value={formData.numero_cuenta}
                    onChange={handleChange}
                    required
                />
            </Form.Group>

            <Form.Group controlId="clave_interbancaria">
                <Form.Label>Clave Interbancaria</Form.Label>
                <Form.Control
                    type="text"
                    name="clave_interbancaria"
                    value={formData.clave_interbancaria}
                    onChange={handleChange}
                    required
                />
            </Form.Group>

            <Form.Group controlId="correo_electronico">
                <Form.Label>Correo Electrónico</Form.Label>
                <Form.Control
                    type="email"
                    name="correo_electronico"
                    value={formData.correo_electronico}
                    onChange={handleChange}
                    required
                />
            </Form.Group>

            <Form.Group controlId="telefono_colaborador">
                <Form.Label>Teléfono del Colaborador</Form.Label>
                <Form.Control
                    type="tel"
                    name="telefono_colaborador"
                    value={formData.telefono_colaborador}
                    onChange={handleChange}
                    required
                />
            </Form.Group>

            <Form.Group controlId="beneficiario_emergencia">
                <Form.Label>Beneficiario / Emergencia</Form.Label>
                <Form.Control
                    type="text"
                    name="beneficiario_emergencia"
                    value={formData.beneficiario_emergencia}
                    onChange={handleChange}
                    required
                />
            </Form.Group>

            <Form.Group controlId="parentesco">
                <Form.Label>Parentesco</Form.Label>
                <Form.Control
                    type="text"
                    name="parentesco"
                    value={formData.parentesco}
                    onChange={handleChange}
                    required
                />
            </Form.Group>

            <Form.Group controlId="numero_beneficiario">
                <Form.Label>Número Beneficiario</Form.Label>
                <Form.Control
                    type="tel"
                    name="numero_beneficiario"
                    value={formData.numero_beneficiario}
                    onChange={handleChange}
                    required
                />
            </Form.Group>

            <Form.Group controlId="infonavit">
                <Form.Label>Infonavit</Form.Label>
                <Form.Control
                    type="text"
                    name="infonavit"
                    value={formData.infonavit}
                    onChange={handleChange}
                    required
                />
            </Form.Group>

            <Form.Group controlId="fecha_pago_cumpleanos">
                <Form.Label>Fecha Pago de Cumpleaños</Form.Label>
                <Form.Control
                    type="date"
                    name="fecha_pago_cumpleanos"
                    value={formData.fecha_pago_cumpleanos}
                    onChange={handleChange}
                    required
                />
            </Form.Group>

            <Form.Group controlId="vacaciones_anterior">
                <Form.Label>Vacaciones Año Anterior</Form.Label>
                <Form.Control
                    type="number"
                    name="vacaciones_anterior"
                    value={formData.vacaciones_anterior}
                    onChange={handleChange}
                    required
                />
            </Form.Group>

            <Form.Group controlId="vacaciones_actual">
                <Form.Label>Vacaciones Año Actual</Form.Label>
                <Form.Control
                    type="number"
                    name="vacaciones_actual"
                    value={formData.vacaciones_actual}
                    onChange={handleChange}
                    required
                />
            </Form.Group>

            <Form.Group controlId="vacaciones_tomadas">
                <Form.Label>Vacaciones Tomadas</Form.Label>
                <Form.Control
                    type="number"
                    name="vacaciones_tomadas"
                    value={formData.vacaciones_tomadas}
                    onChange={handleChange}
                    required
                />
            </Form.Group>

            <Form.Group controlId="vacaciones_pendientes">
                <Form.Label>Vacaciones Pendientes</Form.Label>
                <Form.Control
                    type="number"
                    name="vacaciones_pendientes"
                    value={formData.vacaciones_pendientes}
                    onChange={handleChange}
                    required
                />
            </Form.Group>

            <Form.Group controlId="vacaciones_por_pagar">
                <Form.Label>Vacaciones por Pagar</Form.Label>
                <Form.Control
                    type="number"
                    name="vacaciones_por_pagar"
                    value={formData.vacaciones_por_pagar}
                    onChange={handleChange}
                    required
                />
            </Form.Group>
            <Form.Group controlId="periodo_contrato">
                <Form.Label>Periodo del Contrato (Días)</Form.Label>
                <Form.Control
                    type="number"
                    name="periodo_contrato"
                    value={formData.periodo_contrato}
                    onChange={handleChange}
                    required
                />
            </Form.Group>

            <Form.Group controlId="pago_cumpleanos">
                <Form.Label>Pago de Cumpleaños</Form.Label>
                <Form.Control
                    type="number"
                    step="0.01"
                    name="pago_cumpleanos"
                    value={formData.pago_cumpleanos}
                    onChange={handleChange}
                    required
                />
            </Form.Group>

            <Form.Group controlId="mes_nacimiento">
                <Form.Label>Mes de Nacimiento</Form.Label>
                <Form.Control
                    type="number"
                    name="mes_nacimiento"
                    value={formData.mes_nacimiento}
                    onChange={handleChange}
                    required
                />
            </Form.Group>

            <Form.Group controlId="renovar_contrato">
                <Form.Label>Renovar Contrato</Form.Label>
                <Form.Control
                    as="select"
                    name="renovar_contrato"
                    value={formData.renovar_contrato}
                    onChange={handleChange}
                    required
                >
                    <option value="">Seleccione</option>
                    <option value="Si">Si</option>
                    <option value="No">No</option>
                </Form.Control>
            </Form.Group>

            <Form.Group controlId="fecha_termino_contrato">
                <Form.Label>Fecha de Término de Contrato</Form.Label>
                <Form.Control
                    type="date"
                    name="fecha_termino_contrato"
                    value={formData.fecha_termino_contrato}
                    onChange={handleChange}
                    required
                />
            </Form.Group>

            <Form.Group controlId="actas_administrativas">
                <Form.Label>Actas Administrativas</Form.Label>
                <Form.Control
                    as="textarea"
                    name="actas_administrativas"
                    value={formData.actas_administrativas}
                    onChange={handleChange}
                    required
                />
            </Form.Group>

            <Form.Group controlId="datos_adjuntos">
                <Form.Label>Datos Adjuntos</Form.Label>
                <Form.Control
                    as="textarea"
                    name="datos_adjuntos"
                    value={formData.datos_adjuntos}
                    onChange={handleChange}
                    required
                />
            </Form.Group>

            <Button variant="primary" type="submit">
                Enviar
            </Button>
        </Form>
    );
};

export default FormEmpleado;
