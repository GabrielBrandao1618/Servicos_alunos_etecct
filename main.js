import {getStudentsData} from './api.js'
import {Table} from './table.js'

const table = new Table(document.querySelector('.table'))

function handleOpenDetails(student){
    sessionStorage.setItem('student', JSON.stringify(student))
    window.location.assign('./detail')
}

async function main(){
    const apiData = await getStudentsData()
    apiData.map(student => {
        table.addRow(
            [
                student.nome,
                student.nota1,
                student.nota2,
                student.nota3,
                student.media,
                student.status,
            ],
            () => handleOpenDetails(student)
        )
    })
}

main()