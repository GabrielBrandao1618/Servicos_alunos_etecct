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

    addRow(tds, onClick){
        const row = document.createElement('tr')
        row.onclick = onClick
        const cells = tds.map(createCell)
        
        cells.map(cell => {
            row.appendChild(cell)
        })

        this.tableNode.appendChild(row)
    }
}