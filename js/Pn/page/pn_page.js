// fetch les données du json
async function getChampions(){
    let myRequest = new Request("../data/data.json")
    fetch(myRequest)
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        displayData(data.champions)
    })
}
async function displayData(champions){
    const championsSection = document
}