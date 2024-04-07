let currentIndex = 0; //track the current image index
    

export async function getPhotos() {
    fetch("https://api.harvardartmuseums.org/image?apikey=26ea744e-af15-417f-b92a-1eee88c8caf2&size=120")
    .then((response) => response.json())
    .then((json) => {
        console.log(json);
        let body = document.querySelector('.image1');
        let images = json.records;
    
        displayImage(images[currentIndex], body); // Display initial image (start from 0- not sure how to sort and pick only pictures that i liked)
        body.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % images.length; // Loop back to the start when reaching the end
            displayImage(images[currentIndex], body);
        });
    });
}

function displayImage(image, container) {
    container.innerHTML = ''; //makes one picture

    let img = document.createElement('img');
    img.setAttribute('src', image.baseimageurl); 
    container.appendChild(img); //new img element
}

export async function getPhoto2() {
    fetch("https://api.harvardartmuseums.org/image?apikey=26ea744e-af15-417f-b92a-1eee88c8caf2&size=120")
    .then((response) => response.json())
    .then((json) => {
        console.log(json);
        let body = document.querySelector('.image2');
        let images = json.records;

        let startIndex = images.findIndex(record => record.baseimageurl === "https://nrs.harvard.edu/urn-3:HUAM:VRS10620_dynmc");
        let currentIndex = startIndex !== -1 ? startIndex : 0;

        displayImage2(images[currentIndex], body); 

        body.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % images.length; 
            displayImage2(images[currentIndex], body);
        });
    });
}

function displayImage2(image, container) {
    container.innerHTML = ''; 

    let img = document.createElement('img');
    img.setAttribute('src', image.baseimageurl); 
    container.appendChild(img); 
}
