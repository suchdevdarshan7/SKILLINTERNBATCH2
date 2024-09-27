const container = document.querySelector('.container')

function renderContent(data) {
    const html = ` 
    <h1>${data.courseName}</h1>`
    container.innerHTML += html;

}
async function getCourses() {
    const response = await fetch('http://localhost:5000/courses');
    const data = await response.json();

    data.map((el) => {
        renderContent(el)
    })
}

getCourses()