let images = [
    "https://cdn.pixabay.com/photo/2017/01/12/21/42/tiger-1975790_1280.jpg",
    "https://cdn.pixabay.com/photo/2023/05/23/15/42/bengal-tiger-8013012_640.jpg",
    "https://cdn.pixabay.com/photo/2023/05/23/15/42/bengal-tiger-8013012_640.jpg",
    "https://cdn.pixabay.com/photo/2023/09/14/19/46/elephant-8253639_1280.jpg",
    "https://cdn.pixabay.com/photo/2016/11/14/03/46/girl-1822525_640.jpg"
]

let ImageContainer = document.getElementById('image');
let i = 0;

function Increment(){
    i = i + 1; 
    if(i<images.length){
        ImageContainer.src = images[i];
    }
    else{
        i = 0;
        ImageContainer.src = images[i];
    }

}
function Decrement(){
    i = i - 1;
    if(i>0){
        ImageContainer.src = images[i];
    }
    else{
        i = images.length-1;
        ImageContainer.src = images[i];
    }
}