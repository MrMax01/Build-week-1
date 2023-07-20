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
  // .sort();
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

const contatore = () => {
  const seconds = document.querySelector(".seconds");
  let time = 10;
  const equalPie = Math.floor(450 / time);
  let sumPies = 0;
  seconds.innerText = time;
  timer = setInterval(() => {
    if (time <= 10) {
      seconds.innerText = "0" + --time;
    } else {
      seconds.innerText = --time;
    }
    sumPies += equalPie;
    document.getElementById("circle-time-out").setAttribute("style", `stroke-dasharray: ${sumPies} 500`);

    if (time < 0) {
      app();
    }
  }, 1000);
};

const showDomanda = () => {
  main.innerHTML = "";
  cambioNumero();

  pickRandomQuestion();
  //   console.log(domandaPescata.question);
  header.innerHTML = timeOutHTML;
  const h3 = document.createElement("h3");
  h3.innerText = domandaPescata.question;
  h3.setAttribute("id", "domanda");
  main.appendChild(h3);
  //   console.log(risposte);
  contatore();
  for (let i = 0; i < risposte.length; i++) {
    const button = document.createElement("button");
    button.classList.add("risposta");
    button.onclick = coloraRisposta;
    button.innerText = risposte[i];
    main.appendChild(button);
  }
};

const app = () => {
  if (domandaNumero < numeroDiDomande) {
    clearInterval(timer);
    controllaRisultato();
    showDomanda();
  } else {
    clearInterval(timer);
    header.innerHTML = logo;
    const resultPageHTML = `<div class="introdution">
    <h1 class="size-result no-margin">Results</h1>
    <h2>The summary of your answers:</h2>
    </div>
    <div id="selector">
    <div class="center">
      <p class="size-result no-margin">
        Correct <br />
        <b>${(risultato * 100) / 10}%</b><br />
      </p>
      <p>${risultato}/10 questions</p>
    </div>
    <div class="center">
      <div class="skill">
        <div class="outer">
          <div class="inner">
            <div class="text">
            <span>
            <b
              >Congratulations! <br />
              <span class="aqua"> You passed the exam. </span></b
            >
            <span class="font-piccolo"
              >We'll send you the certificate in few minutes. <br />
              Check your email(including <br />
              promotions/spam folder)</span
            >
            </div>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 159 159" width="260px" height="260px">
          <defs>
            <linearGradient id="GradientColor">
              <stop offset="0%" stop-color="#e91e63" />
              <stop offset="100%" stop-color="#673ab7" />
            </linearGradient>
          </defs>
          <circle cx="80" cy="80" r="70" stroke-linecap="round" id="result" />
        </svg>
      </div>
    </div>
    <div class="center">
      <p class="size-result no-margin">
        Wrong <br />
        <b>${Math.abs((risultato - 10) * 100) / 10}%</b> <br />
      </p>
      <p>${Math.abs(risultato - 10)}/10 questions</p>
    </div>
    </div>`;
    main.innerHTML = resultPageHTML;
    document
      .querySelector("circle")
      .setAttribute("style", `stroke-dasharray: ${Math.floor((437 / 10) * risultato)} 500`);

    document.querySelector("footer").innerHTML = `
      <a href="feedback.html"
        ><button class="button-luminoso middle"><b>RATE US</b></button></a
      >
    `;
  }
};

buttonProsegui.addEventListener("click", app);

showDomanda();
