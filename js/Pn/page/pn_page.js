async function getChampions() {
  let myRequest = new Request("../data/data.json");
  fetch(myRequest)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      displayData(data.champions);
    });
}

async function displayData(champions) {
  const championsSection = document.querySelector("#main");

  champions.forEach((champion) => {
    const championModel = championFactory(champion);
    const championCardDOM = championModel.getChampionsCardDOM();
    championsSection.appendChild(championCardDOM);
  });
}
//getChampions();