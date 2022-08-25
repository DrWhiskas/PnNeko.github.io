function indexHeader() {
  const header = document.getElementById("main");
  const headerCreate = document.createElement("section");
  headerCreate.classList.add("index-header");
  headerCreate.innerHTML = `
        <div class="index-header__link">
            <div class="index-header__link__cross">X</div>
            <div class="index-header__link__minus">-</div>
        <div
    `;
  header.appendChild(headerCreate);
}
function mainHeader() {
  const mainHeader = document.getElementById("main");
  const mainContent = document.createElement("section");
  mainContent.classList.add("main-header");
  mainContent.innerHTML = `
  <aside class="modal">
        <div class="modal__header">
            <div class="modal__header-logo">
                <img src="./img/index/logoRiot.png" alt="logo de riot games">
            </div>
            <div class="modal__title">
                <h1> CONNEXION</h1>
            </div>
        </div>
        <div class="modal__main">
            <div class="modal__main__form">
                <label for="pseudo"></label><br>
                <input class="text-control" type="text" id="pseudo" name="pseudo" placeholder="NOM D'UTILISATEUR"/>
                <div class="error__message">
                    <p id="error__message__first" class="error">Nom d'utilisateur trop court (8 caractères minimum) </p>
                </div>
                <br>
            </div>
            <div class="modal__main__form">
                <label for="password"></label><br>
                <input class="text-control" type="password" id="password" name="password" placeholder="MOT DE PASSE"/>
                <div class="error__message">
                    <p id="error__message__first" class="error">Nom d'utilisateur trop court (8 caractères minimum) </p>
                </div>
            </div>
            <div class="modal__main__form-link">
                <i class="fa-brands fa-facebook blue"></i>
                <i class="fa-brands fa-google white"></i>
                <i class="fa-brands fa-apple black"></i>
            </div>   
        </div>

        <div class="modal__main__footer">
            <a href="ThePn.html" class="modal__main__footer__validation">
                <i class="fa-solid fa-arrow-right fa-2x" id="submit"></i>
            </a>
        </div>
    </aside>    
    <div class ="main-header__content">
        <video autoplay muted loop id="video">
        <source src="./img/index/Zeri League Of Legends Game Live Wallpaper.mp4" typer="video/mp4">
        <audio id="loginAudio" autoplay loop>
            <source src="./audio/index/Zeri, The Spark of Zaun  Champion Theme (ft. Lauren Babic)  - League of Legends.mp3">
        </audio>    
    </div>
    `;
  mainHeader.appendChild(mainContent);
}

function modalCheack() {
  const btn = document.getElementById("submit");

  btn.addEventListener("click", (e) => {
    let pseudo = checkPseudo();
    let pass = checkMP();
    e.preventDefault();
    if (pseudo == false || pass == false) {
    } else {
      location = "./ThePn.html";
      window.location();
    }
  });
}

function checkPseudo() {
  const pseudoCheck = document.getElementById("pseudo");
  if (pseudoCheck.value == "" || pseudoCheck.value.lenght < 6) {
    return false;
  } else {
  }
}
function checkMP() {
  const mpCheck = document.getElementById("password");
  if (mpCheck.value == "" || mpCheck.value.lenght < 6) {
    return false;
  } else {
  }
}

indexHeader();
mainHeader();
modalCheack();
