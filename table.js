import {handleOpenDetails} from './handleOpenDetails.js';

export function createCell(content){
    const cell = document.createElement('td');
    cell.textContent = content;
    return cell;
}

export class Table {
    tableNode = null;
    bodyNode = null;
    mean = 0;
    data = [];
    displayData = [];
    constructor(tableNode){
        this.tableNode = tableNode;
        this.bodyNode = this.tableNode.querySelector('tbody');
        return this;
    }

    addRow(tds, onClick){
        const row = document.createElement('tr');
        row.onclick = onClick;
        const cells = tds.map(createCell);
        
        cells.map(cell => {
            row.appendChild(cell);
        });

        this.bodyNode.appendChild(row);
    }
    setData(data){
        const sortedData = data.sort((a, b) => {
            return a-b
        });
        this.data = sortedData;
        this.displayData = sortedData;
        return this;
    }
    renderItems(){
        this.bodyNode.innerHTML = '';

        this.mean = this.data.reduce((acc, student) => (acc+student.media)/2, this.data[0].media);

        this.displayData.map(student => {
            this.addRow(
                [
                    student.nome,
                    student.nota1,
                    student.nota2,
                    student.nota3,
                    student.media,
                    student.status,
                    student.media > this.mean? 'Acima da média' : 'Abaixo da média'
                ],
                () => handleOpenDetails(student)
            );
        });
    }
    filterByStatus(status){
        if(status.trim() === ''){
            this.displayData = this.data;
        } else {
            this.displayData = this.data.filter(student => student.status === status);
        }
        this.renderItems();
    }
}