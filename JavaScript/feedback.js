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
    // console.log(numberStar);
    if (numberStar.length + 1 <= 6) {
      p.innerHTML =
        "We're sorry if we didn't live up to your expectations. We are open to suggestions for improvement. &#x1F614;";
    } else if (numberStar.length + 1 > 6 && numberStar.length < 8) {
      p.innerHTML = "Thank you! Tell us where we can improve to get the full grade! &#128516;";
    } else {
      p.innerHTML = "We are happy that the services offered by us have been satisfactory! &#x1F498;";
    }

    document.querySelector("footer").appendChild(p);
  }
});
