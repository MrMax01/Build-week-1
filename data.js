/*
Variabili che servono sia a benchmark page e sia a result page
 */

const questions = [
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "medium",
    question: "The HTML5 standard was published in 2014.",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "Which company was established on April 1st, 1976 by Steve Jobs, Steve Wozniak and Ronald Wayne?",
    correct_answer: "Apple",
    incorrect_answers: ["Microsoft", "Atari", "Commodore"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: ["Central Process Unit", "Computer Personal Unit", "Central Processor Unit"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does the &quot;MP&quot; stand for in MP3?",
    correct_answer: "Moving Picture",
    incorrect_answers: ["Music Player", "Multi Pass", "Micro Point"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "medium",
    question: "The first computer bug was formed by faulty wires.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "According to the International System of Units, how many bytes are in a kilobyte of RAM?",
    correct_answer: "1000",
    incorrect_answers: ["512", "1024", "500"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "The programming language &#039;Swift&#039; was created to replace what other programming language?",
    correct_answer: "Objective-C",
    incorrect_answers: ["C#", "Ruby", "C++"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "medium",
    question:
      "All program codes have to be compiled into an executable file in order to be run. This file can then be executed on any machine.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "On which computer hardware device is the BIOS chip located?",
    correct_answer: "Motherboard",
    incorrect_answers: ["Hard Disk Drive", "Central Processing Unit", "Graphics Processing Unit"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "Which of the following languages is used as a scripting language in the Unity 3D game engine?",
    correct_answer: "C#",
    incorrect_answers: ["Java", "C++", "Objective-C"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does the Prt Sc button do?",
    correct_answer: "Captures what&#039;s on the screen and copies it to your clipboard",
    incorrect_answers: [
      "Nothing",
      "Saves a .png file of what&#039;s on the screen in your screenshots folder in photos",
      "Closes all windows",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "What did the name of the Tor Anonymity Network orignially stand for?",
    correct_answer: "The Onion Router",
    incorrect_answers: ["The Only Router", "The Orange Router", "The Ominous Router"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "What was the first commerically available computer processor?",
    correct_answer: "Intel 4004",
    incorrect_answers: ["Intel 486SX", "TMS 1000", "AMD AM386"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "What was the name given to Android 4.3?",
    correct_answer: "Jelly Bean",
    incorrect_answers: ["Lollipop", "Nutella", "Froyo"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What is the domain name for the country Tuvalu?",
    correct_answer: ".tv",
    incorrect_answers: [".tu", ".tt", ".tl"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "RAM stands for Random Access Memory.",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "Generally, which component of a computer draws the most power?",
    correct_answer: "Video Card",
    incorrect_answers: ["Hard Drive", "Processor", "Power Supply"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "How many cores does the Intel i7-6950X have?",
    correct_answer: "10",
    incorrect_answers: ["12", "8", "4"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "Which one of these is not an official development name for a Ubuntu release?",
    correct_answer: "Mystic Mansion",
    incorrect_answers: ["Trusty Tahr", "Utopic Unicorn", "Wily Werewolf"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "In the server hosting industry IaaS stands for...",
    correct_answer: "Infrastructure as a Service",
    incorrect_answers: ["Internet as a Service", "Internet and a Server", "Infrastructure as a Server"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "Which computer language would you associate Django framework with?",
    correct_answer: "Python",
    incorrect_answers: ["C#", "C++", "Java"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "hard",
    question: "The IBM PC used an Intel 8008 microprocessor clocked at 4.77 MHz and 8 kilobytes of memory.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does LTS stand for in the software market?",
    correct_answer: "Long Term Support",
    incorrect_answers: ["Long Taco Service", "Ludicrous Transfer Speed", "Ludicrous Turbo Speed"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "In computing terms, typically what does CLI stand for?",
    correct_answer: "Command Line Interface",
    incorrect_answers: ["Common Language Input", "Control Line Interface", "Common Language Interface"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The NVidia GTX 1080 gets its name because it can only render at a 1920x1080 screen resolution.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "What does &quot;LCD&quot; stand for?",
    correct_answer: "Liquid Crystal Display",
    incorrect_answers: ["Language Control Design", "Last Common Difference", "Long Continuous Design"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question: "Who is the original author of the realtime physics engine called PhysX?",
    correct_answer: "NovodeX",
    incorrect_answers: ["Ageia", "Nvidia", "AMD"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "medium",
    question: "The first dual-core CPU was the Intel Pentium D.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "Which of the following is a personal computer made by the Japanese company Fujitsu?",
    correct_answer: "FM-7",
    incorrect_answers: ["PC-9801", "Xmillennium ", "MSX"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question: "Which data structure does FILO apply to?",
    correct_answer: "Stack",
    incorrect_answers: ["Queue", "Heap", "Tree"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question:
      "What is the name of the process that sends one qubit of information using two bits of classical information?",
    correct_answer: "Quantum Teleportation",
    incorrect_answers: ["Super Dense Coding", "Quantum Entanglement", "Quantum Programming"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question: "Which of these is not a key value of Agile software development?",
    correct_answer: "Comprehensive documentation",
    incorrect_answers: ["Individuals and interactions", "Customer collaboration", "Responding to change"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question: "What does the International System of Quantities refer 1024 bytes as?",
    correct_answer: "Kibibyte",
    incorrect_answers: ["Kylobyte", "Kilobyte", "Kelobyte"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "What was the first Android version specifically optimized for tablets?",
    correct_answer: "Honeycomb",
    incorrect_answers: ["Eclair", "Froyo", "Marshmellow"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "Which of these people was NOT a founder of Apple Inc?",
    correct_answer: "Jonathan Ive",
    incorrect_answers: ["Steve Jobs", "Ronald Wayne", "Steve Wozniak"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question: "Which RAID array type is associated with data mirroring?",
    correct_answer: "RAID 1",
    incorrect_answers: ["RAID 0", "RAID 10", "RAID 5"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "Laserjet and inkjet printers are both examples of what type of printer?",
    correct_answer: "Non-impact printer",
    incorrect_answers: ["Impact printer", "Daisywheel printer", "Dot matrix printer"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question: "What was the first company to use the term &quot;Golden Master&quot;?",
    correct_answer: "Apple",
    incorrect_answers: ["IBM", "Microsoft", "Google"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "How many values can a single byte represent?",
    correct_answer: "256",
    incorrect_answers: ["8", "1", "1024"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "medium",
    question:
      "Linus Sebastian is the creator of the Linux kernel, which went on to be used in Linux, Android, and Chrome OS.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question: "What vulnerability ranked #1 on the OWASP Top 10 in 2013?",
    correct_answer: "Injection ",
    incorrect_answers: ["Broken Authentication", "Cross-Site Scripting", "Insecure Direct Object References"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "Approximately how many Apple I personal computers were created?",
    correct_answer: "200",
    incorrect_answers: ["100", "500", "1000"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In computing, what does MIDI stand for?",
    correct_answer: "Musical Instrument Digital Interface",
    incorrect_answers: [
      "Musical Interface of Digital Instruments",
      "Modular Interface of Digital Instruments",
      "Musical Instrument Data Interface",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "The teapot often seen in many 3D modeling applications is called what?",
    correct_answer: "Utah Teapot",
    incorrect_answers: ["Pixar Teapot", "3D Teapot", "Tennessee Teapot"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question: "What is the codename of the eighth generation Intel Core micro-architecture launched in October 2017?",
    correct_answer: "Coffee Lake",
    incorrect_answers: ["Sandy Bridge", "Skylake", "Broadwell"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question:
      "Lenovo acquired IBM&#039;s personal computer division, including the ThinkPad line of laptops and tablets, in what year?",
    correct_answer: "2005",
    incorrect_answers: ["1999", "2002", "2008"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "hard",
    question: "The T-Mobile Sidekick smartphone is a re-branded version of the Danger Hiptop.",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question: "Which kind of algorithm is Ron Rivest not famous for creating?",
    correct_answer: "Secret sharing scheme",
    incorrect_answers: ["Hashing algorithm", "Asymmetric encryption", "Stream cipher"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question: "Who is the founder of Palantir?",
    correct_answer: "Peter Thiel",
    incorrect_answers: ["Mark Zuckerberg", "Marc Benioff", "Jack Dorsey"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does the computer software acronym JVM stand for?",
    correct_answer: "Java Virtual Machine",
    incorrect_answers: ["Java Vendor Machine", "Java Visual Machine", "Just Virtual Machine"],
  },
];

let domandaPescata = {};
const main = document.querySelector("main");
const header = document.querySelector("header");
const buttonProsegui = document.getElementById("prosegui");
const numeroDomande = 10;
let risposte = [];
const numero = document.getElementById("numeroDomanda");
let timer = null;
let domandaNumero = 0;
let risultato = 0;
const logo = `<img src="./Assets/epicode_logo.png" alt="Epicode logo" id="logo" />`;
const timeOutHTML = `
      ${logo}
      <div class="time-out">
        <div class="outer-time-out">
          <div class="inner-time-out">
            <div class="text-time-out">
            <span class="seconds"></span>
            <span class="secText">sec</span>
            </div>
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
        
          width="160px"
          height="160px"
          id="svg-time-out"
        >
          <defs>
            <linearGradient id="GradientColor">
              <stop offset="0%" stop-color="#e91e63" />
              <stop offset="100%" stop-color="#673ab7" />
            </linearGradient>
          </defs>
          <circle cx="80" cy="80" r="70" stroke-linecap="round" id="circle-time-out" />
        </svg>
      </div>`;
