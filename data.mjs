export async function getDate() {
    fetch("https://api.harvardartmuseums.org/image?apikey=26ea744e-af15-417f-b92a-1eee88c8caf2")
    .then((response) => response.json())
    .then((json) => {
        console.log(json);
        let body = document.querySelector('.date');
        if (json.records.length > 0) {
            const firstRecordDate = json.records[0].date;
            let text = document.createElement('p');
            text.innerText = firstRecordDate;
            body.append(text);
        } else {
            console.log("No records found.");
        }
    });
}
// export async function getDate() {
//     fetch("https://api.harvardartmuseums.org/image?apikey=26ea744e-af15-417f-b92a-1eee88c8caf2")
//     .then((response) => response.json())
//     .then((json) => {
//         console.log(json);
//         let body = document.querySelector('.date');
//         json.records.forEach((record) => {
//             let text = document.createElement('p');
//             text.innerText = record.date;
//             body.append(text);
//         });
//     });
// }


// const date = ["Dates"];

// function generateDates() {
//     document.querySelectorAll('.dateContainer').forEach(elem => elem.remove());
//     date.forEach((dates) => {
//         let newParent = document.createElement("div");
//         newParent.setAttribute("class", "dateContainer");

//         let mainDate = document.createElement("div");
//         mainDate.setAttribute("class", "dates");
//         mainDate.innerHTML = `Info: <span class="nameInput">${dates}</span>`;

    

//         newParent.append(mainDate);
//         document.body.append(newParent);

//     });
// }
// export { date, generateDates };

// ---------------
