export async function getPhotos() {
    fetch("https://api.harvardartmuseums.org/image?apikey=26ea744e-af15-417f-b92a-1eee88c8caf2")
    .then((response) => response.json())
    .then((json) => {
        console.log(json);
        let body = document.querySelector('.images');
        json.records.forEach((record) => {
            let img = document.createElement('img');
            img.setAttribute('src', record.baseimageurl); 
            body.append(img);
        });
    });
}


