import { getPhotos } from "./helper.mjs";
import { getDate } from "./data.mjs";
import { getPhoto2 } from "./helper.mjs";
// import { date, generateDates } from './data.mjs';

// let button = document.getElementById("showDateButton");
// button.addEventListener("click", generateDates);



getPhotos();
// getDate ();
getPhoto2();

const btn = document.getElementById('showDateButton');
console.log(btn);

btn.addEventListener('click', (event)=>{
    const data = getDate()
})