import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

export const exportToExcel = (data, headers, fileName = 'listado.xlsx') => {
  const worksheetData = [headers, ...data.map(item => headers.map(h => item[h] || ''))];
  const worksheet = XLSX.utils.aoa_to_sheet(worksheetData);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Datos');

  const wbout = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
  const blob = new Blob([wbout], { type: 'application/octet-stream' });
  saveAs(blob, fileName);
};

export const exportToPDF = (data, headers, fileName = 'listado.pdf') => {
    const doc = new jsPDF();
    const body = data.map(item => headers.map(h => item[h] || ''));
  
    autoTable(doc, {
      head: [headers],
      body: body,
      styles: { fontSize: 7 },
      headStyles: { fillColor: [22, 160, 133] },
    });
  
    doc.save(fileName);
  };