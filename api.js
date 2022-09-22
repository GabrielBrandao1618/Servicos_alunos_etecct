export async function getStudentsData(){
    const data = await fetch('./api/index.php')
    const parsedData = await data.json()

    return parsedData
}