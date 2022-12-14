function championFactory(data) {
  const { id, name, role, lane, link, icon } = data;

  const picture = `img/page/${icon}`;

  function getChampionsCardDOM() {
    const link = document.createElement("a");
    link.innerHTML = `
            <article class ="photographer__card">
                <a href="photographer.html?id=${data.id}"> 
                    <div class="photographer__portrait">
                        <img src="${picture}">
                    </div>
                    <h2 class="photographer__name">${data.name}</h2>
                </a>
                <div class="photographer__info">
                    <h3 class="photographer__info__localisation">${data.city}, ${data.country}</h3>
                    <p class="photographer__info__tagline">${data.tagline}</p>
                    <p class="photographer__info__price">${data.price}€/jour</p>
                </div>
            </article>        
        `;
    return link;
  }
  return { name, picture, getChampionsCardDOM };
}

/*  HEADER FACTORY*/

function headerFactory() {
  const header = document.getElementById("header");
  const headerContent = document.createElement("nav");
  headerContent.id = "nav-bar";
  headerContent.innerHTML = `
                <div class="nav-bar__logo">
                    <img class="logo normal" src="./img/page/header/riot-logo-black.png" alt="logo normal de riot games">
                    <img class="logo hover" src="./img/page/header/riot-logo-red.png" alt="logo hover de riot games">
                </div>
                <div class="bar"></div>
                <div class="lol">
                    <img src="./img/page/header/lol.png" alt="logo de lol">
                </div>
                <div class="nav-bar__links">
                            jeux
                        <ul class="menu">
                            <li><a href="https://www.leagueoflegends.com/fr-fr/">LEAGUE OF LEGENDS</a></li>
                            <li><a href="https://playvalorant.com/fr-fr/?gclsrc=ds&gclsrc=ds">VALORANT</a></li>
                            <li><a href="https://teamfighttactics.leagueoflegends.com/fr-fr/">TFT</a></li>
                        </ul>
                        </div>
                    <a href="#" class="links" id="link__video">VIDEO</a>
                    <a href="#" class="links" id="link__esport">ESPORT</a>
                    <a href="#" class="links" id="link__patch">PATCH NOTES</a>
                    <a href="#" class="links"  id="link__arcane" >ARCANE</a>
                </div>
        `;
  header.appendChild(headerContent);
}

headerFactory();

/* MAIN FACTORY */

function mainFactory(){
    const main = document.getElementById("main")
    const mainContent = document.createElement('section')
    mainContent.id = "main-info";
        mainContent.innerHTML = `
        

    `;
    main.appendChild(mainContent)
}
