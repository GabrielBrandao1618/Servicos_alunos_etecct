import {getStudentsData} from './api.js'
import {Table} from './table.js'

const table = new Table(document.querySelector('.table'))

table.addRow('Gabri', 1, 4, 5)

async function main(){
    const apiData = await getStudentsData()
    apiData.map(student => {
        table.addRow(
            student.nome,
            student.nota1,
            student.nota2,
            student.nota3,
        )
    })
}

main()