export async function getDate() {
    fetch("https://api.harvardartmuseums.org/image?apikey=26ea744e-af15-417f-b92a-1eee88c8caf2")
    .then((response) => response.json())
    .then((json) => {
        console.log(json);
        let body = document.querySelector('.date');
        json.records.forEach((record) => {
            let text = document.createElement('p');
            text.innerText = record.date;
            body.append(text);
        });
    });
}
