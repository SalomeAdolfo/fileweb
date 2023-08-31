import React from 'react';
import * as XLSX from 'xlsx';

const ExportToExcel = ({ data }) => {
  const exportToExcel = () => {
    const formattedData = {
      'Fecha y hora de Registro': data.fecha_registro,
      'Estatus': data.estatus,
      'Fecha de baja': data.fecha_baja,
      'Motivo de la Baja': data.motivo_baja,
      'Empresa': data.empresa,
      'Localidad': data.localidad,
      'Clave CURP': data.curp,
      'Apellido Paterno': data.apellido_paterno,
      'Apellido Materno': data.apellido_materno,
      'Nombres': data.nombres,
      'Fecha de ingreso': data.fecha_ingreso,
      'NSS': data.nss,
      'RFC': data.rfc,
      'Fecha de Nacimiento': data.fecha_nacimiento,
      'Lugar de Nacimiento': data.lugar_nacimiento,
      'Direccion': data.direccion,
      'Codigo Postal': data.codigo_postal,
      'Municipio': data.municipio,
      'Estado Civil': data.estado_civil,
      'Banco': data.banco,
      'Numero de Cuenta': data.numero_cuenta,
      'Clave Interbancaria': data.clave_interbancaria,
      'Correo Electronico': data.correo_electronico,
      'Telefono del Colaborador': data.telefono_colaborador,
      'Beneficiario/Emergencia': data.beneficiario_emergencia,
      'Parentesco': data.parentesco,
      'Numero Beneficiario': data.numero_beneficiario,
      'Infonavit': data.infonavit,
      'Fecha Pago de Cumpleaños': data.fecha_pago_cumpleanos,
      'Vacaciones Año Anterior': data.vacaciones_anterior,
      'Vacaciones Año Actual': data.vacaciones_actual,
      'Vacaciones Tomadas': data.vacaciones_tomadas,
      'Vacaciones Pendientes': data.vacaciones_pendientes,
      'Vacaciones por Pagar': data.vacaciones_por_pagar,
      'Periodo del Contrato': data.periodo_contrato,
      'Pago Cumpleaños': data.pago_cumpleanos,
      'Mes de Nacimiento': data.mes_nacimiento,
      'Renovar Contrato': data.renovar_contrato,
      'Fecha de Termino de Contrato': data.fecha_termino_contrato,
      'Actas Administrativas': data.actas_administrativas,
      'Datos Adjuntos': data.datos_adjuntos, // Corrected typo
    };

    const ws = XLSX.utils.json_to_sheet([formattedData]); // Wrap the object inside an array
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Empleados');

    const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });

    const blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8' });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = 'empleados.xlsx';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button onClick={exportToExcel} className='btn btn-success'>Exportar a Excel</button>
  );
};

export default ExportToExcel;
