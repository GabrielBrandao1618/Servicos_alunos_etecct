import {getStudentsData} from './api.js';
import {Table} from './table.js';

function loadInfo(mean) {
    const targetNodeMean = document.querySelector('.display-mean .display');
    targetNodeMean.textContent = mean;
}

async function main(){
    const apiData = await getStudentsData();
    const table = new Table(document.querySelector('.table')).setData(apiData);

    table.renderItems(); 

    loadInfo(table.mean);

    const filterSelect = document.querySelector('#filter');
    filterSelect.addEventListener('change', e => {
        const status = e.target.value;
        table.filterByStatus(status);

        loadInfo(table.mean);       
    });
}

main();