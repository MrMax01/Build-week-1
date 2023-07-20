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
