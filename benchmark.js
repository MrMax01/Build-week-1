/*
1. Selezionare il main con queryselector('main') e caricare in modo casuale la domanda con le possibili risposte.
2.al click di uno delle risposte il bottone si dovrà colorare di viola. Se una risposta è già stata selezionata e ne clicchiamo un' altra, la risposta selezionata precedentemente perderà il colore e verrà colorato quella nuova . 
3.Nel momento in cui l'utente clicca prosegui prendi la risposta data e controlli se è corretta. Se è corretta oppure no verrà salvata in un array dove verrà visualizzato il punteggio dell'utente (insieme di risposte esatte e errate ---> [true, flase, true, true, false, true])

4. una volta risposto l'ultima domanda il tasto PROSEGUI ci indirizzerà nella pagina 'result page'
*/

const pickRandomQuestion = () => {
  const randomIndex = Math.floor(Math.random() * questions.length);
  domandaPescata = questions[randomIndex];
  risposte = domandaPescata.incorrect_answers.concat(domandaPescata.correct_answer);
};
const cambioNumero = () => {
  domandaNumero++;
  numero.innerText = domandaNumero;
};
const coloraRisposta = (event) => {
  const rispostaAttiva = document.querySelector(".active");

  if (rispostaAttiva) {
    rispostaAttiva.classList.remove("active");
  }
  event.currentTarget.classList.add("active");
};

const controllaRisultato = () => {
  const rispostaAttiva = document.querySelector(".active");
  if (rispostaAttiva) {
    if (rispostaAttiva.innerText === domandaPescata.correct_answer) {
      risultato++;
    }
  }
};

const showDomanda = () => {
  main.innerHTML = "";
  cambioNumero();

  pickRandomQuestion();
  //   console.log(domandaPescata.question);
  const h3 = document.createElement("h3");
  h3.innerText = domandaPescata.question;
  h3.setAttribute("id", "domanda");
  main.appendChild(h3);
  //   console.log(risposte);
  for (let i = 0; i < risposte.length; i++) {
    const button = document.createElement("button");
    button.classList.add("risposta");
    button.onclick = coloraRisposta;
    button.innerText = risposte[i];
    main.appendChild(button);
  }
};

const app = () => {
  if (domandaNumero < numeroDomande) {
    controllaRisultato();
    showDomanda();
  } else {
    console.log("HAI PRESO: " + risultato);
  }
};

buttonProsegui.addEventListener("click", app);

showDomanda();
