export function handleOpenDetails(student){
    sessionStorage.setItem('student', JSON.stringify(student));
    window.location.assign('./detail');
}