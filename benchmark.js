/*
1. Selezionare il main con queryselector('main') e caricare in modo casuale la domanda con le possibili risposte.
2.al click di uno delle risposte il bottone si dovrà colorare di viola. Se una risposta è già stata selezionata e ne clicchiamo un' altra, la risposta selezionata precedentemente perderà il colore e verrà colorato quella nuova . 
3.Nel momento in cui l'utente clicca prosegui prendi la risposta data e controlli se è corretta. Se è corretta oppure no verrà salvata in un array dove verrà visualizzato il punteggio dell'utente (insieme di risposte esatte e errate ---> [true, flase, true, true, false, true])

4. una volta risposto l'ultima domanda il tasto PROSEGUI ci indirizzerà nella pagina 'result page'
*/
const pickRandomQuestion = () => {
  const randomIndex = Math.floor(Math.random() * arrQuestion.length);
  domandaPescata = arrQuestion[randomIndex];
  risposte = domandaPescata.incorrect_answers.concat(domandaPescata.correct_answer);
  // .sort();
};
const cambioNumero = () => {
  const numero = document.getElementById("numeroDomanda");

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
      totalInfoAnswer.push({
        domanda: domandaPescata.question,
        risposte: risposte,
        yourPick: rispostaAttiva.innerText,
        correctAnswer: domandaPescata.correct_answer,
        bool: true,
      });
    } else {
      totalInfoAnswer.push({
        domanda: domandaPescata.question,
        risposte: risposte,
        yourPick: rispostaAttiva.innerText,
        correctAnswer: domandaPescata.correct_answer,
        bool: false,
      });
    }
  } else {
    totalInfoAnswer.push({
      domanda: domandaPescata.question,
      risposte: risposte,
      yourPick: "NO ANSWER",
      correctAnswer: domandaPescata.correct_answer,
      bool: false,
    });
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
  /*CREO IL FOOTER */
  footer.innerHTML = "";
  /*BUTTON PROSEGUI*/
  footer.innerHTML = "";
  const btnProsegui = document.createElement("button");
  btnProsegui.classList.add("button-luminoso");
  btnProsegui.setAttribute("id", "prosegui");
  btnProsegui.innerText = "Prosegui";
  footer.appendChild(btnProsegui);
  console.log(btnProsegui);
  const buttonProsegui = document.getElementById("prosegui");
  buttonProsegui.addEventListener("click", app);
  /*QUESTION /10 NEL FOOOTER */
  const pQuestion = document.createElement("p");
  pQuestion.classList.add("question-center");
  pQuestion.innerHTML = `QUESTION <span id="numeroDomanda"></span><span class="violet"> / 10</span>`;
  footer.appendChild(pQuestion);
  cambioNumero();
};

const app = () => {
  if (domandaNumero < totalDomande) {
    clearInterval(timer);
    controllaRisultato();
    showDomanda();
  } else {
    controllaRisultato(); // adding last question
    clearInterval(timer); //tolgo il timer;
    /*----------LOAD RESULT PAGE----- */
    header.innerHTML = logo;
    /* ---- HERE WE HAVE ALL THE MAIN------- */
    const resultPageHTML = `<div class="introdution">
    <h1 class="size-result no-margin">Results</h1>
    <h2 class="no-margin">The summary of your answers:</h2>
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
              >${risultato >= 6 ? "Congratulations!" : "Oh no!"} <br />
              <span class="aqua"> ${risultato >= 6 ? "You passed the exam" : "you don't pass the exam"}. </span></b
            >
            <span class="font-piccolo"
              >${
                risultato >= 6
                  ? "We'll send you the certificate in few minutes. <br />Check your email(including <br /promotions/spam folder)</span>"
                  : "Try Again!"
              }
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
    main.innerHTML = resultPageHTML; //load main
    /* -----result graph ------*/
    document
      .querySelector("circle")
      .setAttribute("style", `stroke-dasharray: ${Math.floor((437 / 10) * risultato)} 500`);
    //footer
    footer.innerHTML = `
      <a href="feedback.html"
        ><button class="button-luminoso no-float">RATE US</button></a
        >
        <button class="button-luminoso no-float" id='info'>INFO QUESTIONS</button>
     
    `;
    footer.classList.add("centerText");

    /*INFO BUTTON LISTENER */
    const info = document.getElementById("info");
    info.addEventListener("click", () => {
      main.innerHTML = ""; //clearing  main
      footer.innerHTML = ""; //clearing footer
      const body = document.querySelector("body");
      body.classList.add("no-height");
      /*TITLE PAGE*/
      const h3 = document.createElement("h3");
      h3.innerText = "CHECK YOUR RESULT:";
      h3.classList.add("violet");
      h3.classList.add("centerText");
      main.appendChild(h3);
      /*-------------------------------------- */

      /* CREATE INFO LIST*/
      for (let i = 0; i < totalInfoAnswer.length; i++) {
        const h5 = document.createElement("h5");
        h5.innerText = totalInfoAnswer[i].domanda;
        const ul = document.createElement("ul");
        ul.classList.add("no-margin");
        ul.classList.add("no-show");
        if (totalInfoAnswer[i].bool) {
          h5.classList.add("correct");
        } else {
          h5.classList.add("wrong");
        }
        h5.addEventListener("click", () => {
          ul.classList.toggle("show");
        });
        main.appendChild(h5);
        for (let j = 0; j < totalInfoAnswer[i].risposte.length; j++) {
          const li = document.createElement("li");
          if (
            totalInfoAnswer[i].risposte[j] === totalInfoAnswer[i].yourPick ||
            totalInfoAnswer[i].risposte[j] === totalInfoAnswer[i].correctAnswer
          ) {
            if (totalInfoAnswer[i].risposte[j] === totalInfoAnswer[i].correctAnswer) {
              li.innerHTML = totalInfoAnswer[i].risposte[j] + " &#x2714;";
            } else if (totalInfoAnswer[i].risposte[j] === totalInfoAnswer[i].yourPick) {
              li.innerHTML = totalInfoAnswer[i].risposte[j] + " &#x2716;";
            } else {
              li.innerHTML = totalInfoAnswer[i].risposte[j] + " &#x2714;";
            }
          } else {
            li.innerText = totalInfoAnswer[i].risposte[j];
          }
          ul.appendChild(li);
        }
        main.appendChild(ul);
      }
      /*FOOTER */
      footer.innerHTML = `<a href="feedback.html"
      ><button class="button-luminoso no-float" style="margin-bottom:4em;">RATE US</button></a
      >`;
    });
  }
};

const difficulty = document.querySelectorAll(".risposta");
difficulty.forEach((elem) => {
  elem.addEventListener("click", coloraRisposta);
});

const ready = document.getElementById("ready");
ready.addEventListener("click", () => {
  const difficoltaAttiva = document.querySelector(".active");
  if (difficoltaAttiva) {
    level = difficoltaAttiva.value;
    arrQuestion = questions.filter((elem) => elem.difficulty === level);
    // console.log(level);
    // console.log(arrQuestion);
    showDomanda();
  } else {
    window.alert("Pick a difficulty before starting!");
  }
});
