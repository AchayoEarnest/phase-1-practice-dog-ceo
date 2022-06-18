console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', ()=> {
    fetchImage();
    loadBreedOptions();

});

function fetchImage(){
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    fetch(imgUrl)
    .then (res => res.json())
    .then(results => {
        results.message.forEach(image => addImage(image))
    });
}
