/* SEZIONE PER IL VOTO*/
const stars = document.querySelectorAll(".star");
stars.forEach((star) => {
  star.addEventListener("click", (event) => {
    const currentStar = event.currentTarget;
    if (currentStar.classList.contains("selected")) {
      currentStar.classList.remove("selected");
    } else {
      // Rimuovi la classe "selected" da tutte le stelle prima di selezionare la stella corrente
      stars.forEach((star) => {
        star.classList.remove("selected");
      });
      currentStar.classList.add("selected");
    }
  });
  //   star.classList.add("selected");
});
/* CONTA STELLINE RICEVUTO UNA VOLTA PREMUTO UTENTE E RILASCIA UN MESSAGGIO A SECONDA DEL VOTO DATO*/
const body = document.querySelector("body");

body.addEventListener("keyup", (event) => {
  // console.log(event.key);
  if (event.key === "Enter") {
    document.querySelector("input").innerText = "";
    const p = document.getElementById("msg");
    p.innerHTML = "";
    const numberStar = document.querySelectorAll(".star.selected ~ .star");
    console.log(numberStar);
    if (numberStar.length + 1 <= 6) {
      p.innerHTML =
        "Siamo spiacenti che non siamo stati all'altezza delle tue aspettative. Siamo aperti a suggerimenti per migliorarci. &#x1F614;";
    } else if (numberStar.length + 1 > 6 && numberStar.length < 8) {
      p.innerHTML = "Grazie! Dicci dove possiamo migliorare per ottenere il voto pieno! &#128516;";
    } else {
      p.innerHTML = "Siamo contenti che i servizi da noi offerti siano stati soddisfacenti! &#x1F498;";
    }

    document.querySelector("footer").appendChild(p);
  }
});
