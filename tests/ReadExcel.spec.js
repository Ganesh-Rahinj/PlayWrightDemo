import XLSX from 'xlsx';

export class readExcel
{

//const XLSX=require('xlsx');

async readExcelData(filepath,sheetName)
{
   const workbook=XLSX.readFile('tests/data1.xlsx');
   const sheet=workbook.Sheets[sheetName];
   return XLSX.utils.sheet_to_json(sheet)
}
} 