import {getStudentsData} from './api.js';
import {Table} from './table.js';

function loadInfo(mean) {
    const targetNodeMean = document.querySelector('.display-mean .display');
    targetNodeMean.textContent = mean;
}

function getStudentsMean(students){
    return students.reduce((acc, student) => (acc+student.media)/2, students[0].media);
}

async function main(){
    const apiData = await getStudentsData();
    const table = new Table(document.querySelector('.table')).setData(apiData);

    table.renderItems(); 

    loadInfo(getStudentsMean(table.displayData));

    const filterSelect = document.querySelector('#filter');
    filterSelect.addEventListener('change', e => {
        const status = e.target.value;
        table.filterByStatus(status);

        const mean = getStudentsMean(table.displayData);
        loadInfo(mean);        
    });
}

main();