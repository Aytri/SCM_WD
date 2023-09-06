import excel from 'exceljs'

describe('Excel',async() =>{
    it('Read data',async()=>{
    const book= new excel.Workbook()
    await book.xlsx.readFile("C:/Users/user/Desktop/SCM_WD/Excel.xlsx")
    const sheet=book.getWorksheet('DataProvider')
    let lastR=sheet.lastRow
    let lastC=sheet.lastColumn
    for(let i=1;i<lastR;i++){
        for(let j=1;j<lastC;j++){
    let data=sheet.getRow(i).getCell(j).toString()
    console.log(data);
    let data1=sheet.getRow(i).getCell(j).toString()
    console.log(data1);
    }
}
})
xit('write data',async()=>{
    const book=new excel.Workbook()
    const sheet=book.addWorksheet('sheet1')
    sheet.addRow(1).getCell(1).value='name'
    sheet.getRow(1).getCell(2).value="ayu"
    sheet.addRow(2).getCell(1).value='loc'
    sheet.getRow(2).getCell(2).value='kan'
 await book.xlsx.writeFile("C:/Users/user/Desktop/SCM_WD/Excel.xlsx")

})
})