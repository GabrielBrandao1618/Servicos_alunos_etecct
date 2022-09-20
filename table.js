export function createCell(content){
    const cell = document.createElement('td')
    cell.textContent = content
    return cell
}

export class Table {
    tableNode = null
    constructor(tableNode){
        this.tableNode = tableNode
    }

    addRow(name, grade1, grade2, grade3){
        const row = document.createElement('tr')
        const [
            cellName,
            cell1,
            cell2,
            cell3
        ] = [
            createCell(name),
            createCell(grade1),
            createCell(grade2),
            createCell(grade3),
        ]
        row.appendChild(cellName)
        row.appendChild(cell1)
        row.appendChild(cell2)
        row.appendChild(cell3)

        this.tableNode.appendChild(row)
    }
}