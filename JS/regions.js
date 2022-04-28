const root = document.querySelector("#root");
// const info = document.querySelector("#info");

// const fetchApi = async (regionsData) => {
//   let response = await fetch(api);
//   let data = await response.json();
//    displayData(data);
// };

const displayData = (regionsData) => {
  const regions = `<ul class='card-container'>
  ${regionsData
    .map(
      (region) =>
        `<li class='card'><img class='img-card'src=../assets/img/${region.code}.jpg><div class='text-card-container'><p>${region.nom}</p><a href='../details/${region.code}.html' class='see-more'>Voir plus</a></div></li>`
    )
    .join("")}
  </ul>`;

  root.innerHTML = regions;
};

// const displayData2 = (regionData) => {
//   const infos = `<div class='informations'>
// ${regionData
//   .map(
//     (region) =>
//       `<div class='divimg'><img class="imgdescr"src=assets/img/${region.code}.jpg><div class='informations'><p>${region.nom}</p><p class='les-infos'>${region.codeDepartement}<br>${region._score}</p></div></div>`
//   )
//   .join("")}
// </div>`;
//   info.innerHTML = infos;
// };

const fetchApi = async (api) => {
  try {
    let response = await fetch(api);
    let data = await response.json();
    displayData(data);
  } catch (error) {
    console.log(error);
  }
};
fetchApi("https://geo.api.gouv.fr/regions?limit=8");

// fetch("https://geo.api.gouv.fr/regions?limit=8")
//   .then((response) => response.json())
//   .then((data) => displayData(data))
//   .catch((error) => console.log(error));
