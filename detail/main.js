async function main(){
    const jsonStudentData = sessionStorage.getItem('student')
    const student = JSON.parse(jsonStudentData)
    document.querySelector('h1').textContent = student.nome

    document.querySelector('.detail.nota1 .data').textContent = student.nota1
    document.querySelector('.detail.nota2 .data').textContent = student.nota2
    document.querySelector('.detail.nota3 .data').textContent = student.nota3
    document.querySelector('.detail.media .data').textContent = student.media
    document.querySelector('.detail.status .data').textContent = student.status
}

main()