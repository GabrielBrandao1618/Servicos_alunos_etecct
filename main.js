import {getStudentsData} from './api.js';
import {Table} from './table.js';

async function main(){
    const apiData = await getStudentsData();
    const table = new Table(document.querySelector('.table')).setData(apiData);

    table.renderItems(); 
}

main();