import React from 'react';
import * as XLSX from 'xlsx';

const ExportToExcel = ({ data }) => {
  const exportToExcel = () => {
    const formattedData = data.map(item => ({
      'Fecha y hora de Registro': item.fecha_registro,
      'Estatus': item.estatus,
      'Fecha de baja': item.fecha_baja,
      'Motivo de la Baja': item.motivo_baja,
      'Empresa': item.empresa,
      'Localidad': item.localidad,
      'Clave CURP': item.curp,
      'Apellido Paterno': item.apellido_paterno,
      'Apellido Materno': item.apellido_materno,
      'Nombres': item.nombres,
      'Fecha de ingreso': item.fecha_ingreso,
      'NSS': item.nss,
      'RFC': item.rfc,
      'Fecha de Nacimiento': item.fecha_nacimiento,
      'Lugar de Nacimiento': item.lugar_nacimiento,
      'Direccion': item.direccion,
      'Codigo Postal': item.codigo_postal,
      'Municipio': item.municipio,
      'Estado Civil': item.estado_civil,
      'Banco': item.banco,
      'Numero de Cuenta': item.numero_cuenta,
      'Clave Interbancaria': item.clave_interbancaria,
      'Correo Electronico': item.correo_electronico,
      'Telefono del Colaborador': item.telefono_colaborador,
      'Beneficiario/Emergencia': item.beneficiario_emergencia,
      'Parentesco': item.parentesco,
      'Numero Beneficiario': item.numero_beneficiario,
      'Infonavit': item.infonavit,
      'Fecha Pago de Cumpleaños': item.fecha_pago_cumpleanos,
      'Vacaciones Año Anterior': item.vacaciones_anterior,
      'Vacaciones Año Actual': item.vacaciones_actual,
      'Vacaciones Tomadas': item.vacaciones_tomadas,
      'Vacaciones Pendientes': item.vacaciones_pendientes,
      'Vacaciones por Pagar': item.vacaciones_por_pagar,
      'Periodo del Contrato': item.periodo_contrato,
      'Pago Cumpleaños': item.pago_cumpleanos,
      'Mes de Nacimiento': item.mes_nacimiento,
      'Renovar Contrato': item.renovar_contrato,
      'Fecha de Termino de Contrato': item.fecha_termino_contrato,
      'Actas Administrativas': item.actas_administrativas,
      'Datos Adjuntos': item.datos_adjuntos,
    }));

    const ws = XLSX.utils.json_to_sheet(formattedData);
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
