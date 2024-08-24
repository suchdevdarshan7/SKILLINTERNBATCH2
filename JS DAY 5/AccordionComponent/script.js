let boxes = document.querySelectorAll('.box')


boxes.forEach(element=> element.addEventListener('click',function(){
    RemoveActiveClasses()
    element.classList.toggle('active')

    let ans = element.classList.contains('active')
    console.log(ans)
}))


function RemoveActiveClasses(){
    boxes.forEach(element=>{
        console.log(value)
        element.classList.remove('active')})
}