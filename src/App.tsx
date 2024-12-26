import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css';
import './styles.css';
import Trivia from './components/Trivia';
import Timer from './components/Timer';
import Confetti from 'react-confetti'; // Import the Confetti component


function App() {
  const [questionNumber, setQuestionNumber] = useState(1)
  const [timeOut, setTimeOut] = useState(false)
  const [isPause, setIsPause] = useState(false)

  const questions= [
    {
        id:1,
        question:"Rolex est une entreprise qui vends quels type de produits?",
        answers : [
            {
                text:"Telephones",
                correct:false,
            },
            {
                text:"Montres",
                correct:true,
            },
            {
                text:"Maisons",
                correct:false,
            },
            {
                text:"Voitures",
                correct:false,
            },

        ]
    },
    {
        id:2,
        question:"Laquelle des voitures d'Alpha Motors est plus adequat pour les routes camerounaises?",
        answers : [
            {
                text:"MG 6",
                correct:false,
            },
            {
                text:"H5",
                correct:false,
            },
            {
                text:"Aucune",
                correct:false,
            },
            {
                text:"Toute",
                correct:true,
            },

        ]
    },
    {
        id:3,
        question:"Who is the strongest Avenger?",
        answers : [
            {
                text:"Iron Man",
                correct:false,
            },
            {
                text:"Capitain America",
                correct:false,
            },
            {
                text:"Thor",
                correct:false,
            },
            {
                text:"HULK",
                correct:true,
            },

        ]
    }
]; 
const data  = [
    {
        id: 1,
        question: "Quel est le pays d'origine de Great Wall Motors (GWM), le fabricant des SUV HAVAL ?",
        answers: [
            { text: "Cameroun", correct: false },
            { text: "Chine", correct: true },
            { text: "Japon", correct: false },
            { text: "Allemagne", correct: false }
        ]
    },
    {
        id: 2,
        question: "Quel type de véhicule est le HAVAL H9 ?",
        answers: [
            { text: "Pickup", correct: false },
            { text: "SUV tout-terrain", correct: true },
            { text: "Berline", correct: false },
            { text: "Voiture sportive", correct: false }
        ]
    },
    {
        id: 3,
        question: "Quel modèle de GWM est une version coupée et luxueuse d’un SUV tout-terrain ?",
        answers: [
            { text: "HAVAL M6 Plus", correct: false },
            { text: "Tank 300 Luxe", correct: false },
            { text: "Pickup Rich 6", correct: false },
            { text: "Cybertank Collection Blacknight", correct: true }
        ]
    },
    {
        id: 4,
        question: "Quel véhicule parmi ceux-ci est une berline sportive ?",
        answers: [
            { text: "MG7", correct: true },
            { text: "Tank 300 Luxe", correct: false },
            { text: "HAVAL H5", correct: false },
            { text: "Pickup Rich 6", correct: false }
        ]
    },
    {
        id: 5,
        question: "Parmi les modèles que vous proposez, lequel est un pickup utilitaire ?",
        answers: [
            { text: "HAVAL H6", correct: false },
            { text: "Dongfeng Rich 6", correct: true },
            { text: "GEELY Binyue Cool", correct: false },
            { text: "Tank 300 Luxe", correct: false }
        ]
    },
    {
        id: 6,
        question: "Le HAVAL H6 est connu pour être :",
        answers: [
            { text: "Une berline compacte", correct: false },
            { text: "Un SUV le plus vendu en Chine", correct: true },
            { text: "Un pickup robuste", correct: false },
            { text: "Un véhicule tout-terrain à 7 places", correct: false }
        ]
    },
    {
        id: 7,
        question: "Quel modèle parmi ceux-ci est conçu pour offrir un confort et des performances tout-terrain de luxe ?",
        answers: [
            { text: "Tank 300 Luxe", correct: true },
            { text: "GEELY Binyue Cool", correct: false },
            { text: "HAVAL M6 Plus", correct: false },
            { text: "MG7", correct: false }
        ]
    },
    {
        id: 8,
        question: "Quelle marque automobile est spécialisée dans les véhicules sportifs et élégants, comme la MG7 ?",
        answers: [
            { text: "Great Wall Motors", correct: false },
            { text: "Dongfeng", correct: false },
            { text: "MG Motors", correct: true },
            { text: "GEELY", correct: false }
        ]
    },
    {
        id: 9,
        question: "Parmi les véhicules suivants, lequel est destiné aux amateurs de design futuriste et technologique ?",
        answers: [
            { text: "HAVAL H9", correct: false },
            { text: "Cybertank Collection Blacknight", correct: true },
            { text: "Pickup Rich 6", correct: false },
            { text: "HAVAL H5", correct: false }
        ]
    },
    {
        id: 10,
        question: "Dans quel segment se trouve la GEELY Binyue Cool ?",
        answers: [
            { text: "Pickup", correct: false },
            { text: "SUV compact", correct: true },
            { text: "Berline sportive", correct: false },
            { text: "SUV tout-terrain", correct: false }
        ]
    },
    {
        id: 11,
        question: "Quel modèle de HAVAL est particulièrement adapté pour des trajets familiaux grâce à sa fiabilité et son espace ?",
        answers: [
            { text: "HAVAL H6", correct: false },
            { text: "Tank 300 Luxe", correct: false },
            { text: "HAVAL M6 Plus", correct: true },
            { text: "HAVAL H9", correct: false }
        ]
    },
    {
        id: 12,
        question: "Quel moteur équipe principalement le Tank 300 Luxe ?",
        answers: [
            { text: "Un moteur hybride électrique", correct: false },
            { text: "Un moteur essence turbo", correct: true },
            { text: "Un moteur diesel de 3 litres", correct: false },
            { text: "Un moteur V8", correct: false }
        ]
    },
    {
        id: 13,
        question: "En quelle année MG Motors a-t-elle été relancée sous l'égide de SAIC Motors, après son rachat ?",
        answers: [
            { text: "2006", correct: true },
            { text: "2010", correct: false },
            { text: "2012", correct: false },
            { text: "2015", correct: false }
        ]
    },
    {
        id: 14,
        question: "Le Pickup Rich 6 est fabriqué en collaboration avec :",
        answers: [
            { text: "Toyota", correct: false },
            { text: "Nissan", correct: true },
            { text: "Mitsubishi", correct: false },
            { text: "Ford", correct: false }
        ]
    },
    {
        id: 15,
        question: "Quel est un point fort de la GEELY Binyue Cool qui attire les jeunes conducteurs ?",
        answers: [
            { text: "Son autonomie électrique", correct: false },
            { text: "Son design sportif et ses performances dynamiques", correct: true },
            { text: "Sa grande capacité de chargement", correct: false },
            { text: "Son système de conduite autonome complet", correct: false }
        ]
    },
    {
        id: 16,
        question: "Quel véhicule est le mieux adapté pour une grande famille recherchant un SUV spacieux et confortable ?",
        answers: [
            { text: "HAVAL H6", correct: false },
            { text: "HAVAL H9", correct: true },
            { text: "MG7", correct: false },
            { text: "GEELY Binyue Cool", correct: false }
        ]
    },
    {
        id: 17,
        question: "Quel véhicule conviendrait parfaitement à un jeune entrepreneur recherchant un design sportif et technologique ?",
        answers: [
            { text: "HAVAL M6 Plus", correct: false },
            { text: "GEELY Binyue Cool", correct: true },
            { text: "Tank 300 Luxe", correct: false },
            { text: "Pickup Rich 6", correct: false }
        ]
    },
    {
        id: 18,
        question: "Quel modèle serait idéal pour un agriculteur ou un entrepreneur ayant besoin d’un véhicule robuste pour transporter du matériel ?",
        answers: [
            { text: "Tank 300 Luxe", correct: false },
            { text: "Pickup Rich 6", correct: true },
            { text: "HAVAL H5", correct: false },
            { text: "MG7", correct: false }
        ]
    },
    {
        id: 19,
        question: "Quel véhicule offre une expérience haut de gamme pour les passionnés de conduite tout-terrain ?",
        answers: [
            { text: "Tank 300 Luxe", correct: true },
            { text: "HAVAL H9", correct: true },
            { text: "MG7", correct: false },
            { text: "GEELY Binyue Cool", correct: false }
        ]
    },
{
    id: 20,
    question: "Quelle est la capacité principale qui rend le HAVAL H9 idéal pour les aventures tout-terrain au Cameroun ?",
    answers: [
        { text: "Son autonomie électrique", correct: false },
        { text: "Son système de traction intégrale", correct: true },
        { text: "Son design compact", correct: false },
        { text: "Sa grande vitesse", correct: false }
    ]
},
{
    id: 21,
    question: "Pour les trajets urbains à Yaoundé, quel modèle HAVAL offre à la fois espace et économie de carburant ?",
    answers: [
        { text: "HAVAL M6 Plus", correct: true },
        { text: "Tank 300 Luxe", correct: false },
        { text: "Pickup Rich 6", correct: false },
        { text: "HAVAL H9", correct: false }
    ]
},
{
    id: 22,
    question: "Le Cybertank Collection Blacknight est particulièrement apprécié pour :",
    answers: [
        { text: "Sa vitesse maximale", correct: false },
        { text: "Son design futuriste et ses technologies avancées", correct: true },
        { text: "Sa capacité à transporter des charges lourdes", correct: false },
        { text: "Sa simplicité et son prix abordable", correct: false }
    ]
},
{
    id: 23,
    question: "Quel modèle parmi ceux-ci est idéal pour une entreprise ayant besoin d’un véhicule utilitaire robuste ?",
    answers: [
        { text: "MG7", correct: false },
        { text: "Dongfeng Rich 6", correct: true },
        { text: "GEELY Binyue Cool", correct: false },
        { text: "HAVAL M6 Plus", correct: false }
    ]
},
{
    id: 24,
    question: "Pour une famille à la recherche de luxe et d’aventure, quel modèle HAVAL est le plus recommandé ?",
    answers: [
        { text: "HAVAL H5", correct: false },
        { text: "HAVAL H9", correct: true },
        { text: "GEELY Binyue Cool", correct: false },
        { text: "Pickup Rich 6", correct: false }
    ]
},
{
    id: 25,
    question: "Lequel de ces véhicules se distingue par son design élégant et ses performances sportives ?",
    answers: [
        { text: "MG7", correct: true },
        { text: "Tank 300 Luxe", correct: false },
        { text: "HAVAL M6 Plus", correct: false },
        { text: "Pickup Rich 6", correct: false }
    ]
},
{
    id: 26,
    question: "Quel modèle est le plus approprié pour les régions rurales où les routes peuvent être difficiles ?",
    answers: [
        { text: "HAVAL H9", correct: true },
        { text: "MG7", correct: false },
        { text: "GEELY Binyue Cool", correct: false },
        { text: "Cybertank Collection Blacknight", correct: false }
    ]
},
{
    id: 27,
    question: "En termes de fiabilité et d’économie, quel véhicule est parfait pour une jeune famille au Cameroun ?",
    answers: [
        { text: "HAVAL M6 Plus", correct: true },
        { text: "Tank 300 Luxe", correct: false },
        { text: "Cybertank Collection Blacknight", correct: false },
        { text: "HAVAL H9", correct: false }
    ]
},
{
    id: 28,
    question: "Quel est l’avantage principal du Pickup Rich 6 pour les entrepreneurs ?",
    answers: [
        { text: "Sa faible consommation", correct: false },
        { text: "Sa robustesse et sa capacité de chargement", correct: true },
        { text: "Son design compact", correct: false },
        { text: "Sa vitesse élevée", correct: false }
    ]
},
{
    id: 29,
    question: "Quelle caractéristique du Tank 300 Luxe est idéale pour les amateurs de safari ?",
    answers: [
        { text: "Son espace de chargement", correct: false },
        { text: "Son design robuste et sa traction intégrale", correct: true },
        { text: "Son autonomie électrique", correct: false },
        { text: "Son intérieur minimaliste", correct: false }
    ]
},
{
    id: 30,
    question: "La GEELY Binyue Cool est souvent préférée pour :",
    answers: [
        { text: "Ses caractéristiques sportives et son prix accessible", correct: true },
        { text: "Sa capacité à tout-terrain", correct: false },
        { text: "Sa grande taille", correct: false },
        { text: "Sa robustesse pour les travaux lourds", correct: false }
    ]
},
]


  const moneyPyramid = [
    {id:1, amount:"Casquette"},
    {id:2, amount:"Casquette"},
    {id:3, amount:"Casquette"},
    {id:4, amount:"Casquette"},
    {id:5, amount:"Casquette"},
    {id:6, amount:"Tapis Souris"},
    {id:7, amount:"Tapis Souris"},
    {id:8, amount:"Tapis Souris"},
    {id:9, amount:"Tapis Souris"},
    {id:10, amount:"Tapis Souris"},
    {id:11, amount:"Tapis Souris"},
    // {id:12, amount:"$ 125000"},
    // {id:13, amount:"$ 250000"},
    // {id:14, amount:"$ 500000"},
    // {id:15, amount:"$ 1000000"},
  ].reverse()

  
  const gameOverPrize =
    moneyPyramid[moneyPyramid.length - questionNumber -1]?.amount || "Nothing";

  // If the game is over (either timeout or all questions answered)
  if (timeOut || questionNumber > data.length) {
    const hasWonAllQuestions = questionNumber > data.length;
    const prizeIndex = hasWonAllQuestions
        ? 0 // Top prize (reverse order)
        : moneyPyramid.length - questionNumber + 1; // Corresponding prize for last correct question
    const prizeWon = moneyPyramid[prizeIndex]?.amount;
    {/* Conditionally render Confetti */}

    const showConfetti = hasWonAllQuestions || (timeOut && prizeWon);

    return (
        <>
        {showConfetti && <Confetti  />}
        <div
            className={`gameOver ${
                hasWonAllQuestions
                    ? 'winAll'
                    : timeOut && prizeWon
                    ? 'withPrize'
                    : 'noPrize'
            }`}
        >
            <div className="gameOverContent">
                {/* Title Section */}
                <h1 className="gameOverTitle">
                    {hasWonAllQuestions
                        ? "Congratulations! You've won the grand prize!"
                        : timeOut && prizeWon
                        ? "Game Over, but you won a prize!"
                        : "Game Over"}
                </h1>

                {/* Prize Section */}
                <div className="prizeSection">
                    {hasWonAllQuestions || (timeOut && prizeWon) ? (
                        <p className="gameOverPrize">
                            You won: <span className="highlightedPrize">{prizeWon}</span>
                        </p>
                    ) : (
                        <p className="gameOverPrize">Better luck next time!</p>
                    )}
                </div>

                {/* Button Section */}
                <button
                    className="gameOverButton"
                    onClick={() => window.location.reload()}
                >
                    Restart Game
                </button>
            </div>
        </div>
        </>
    );
}




  return (
    <> 
    <div className="app">
      <div className="main">
        <div className="top">
          <Timer isPause={isPause} setTimeOut={setTimeOut}  questionNumber={questionNumber} />.
        </div>
        <div className="buttom">
          <Trivia setIsPause={setIsPause} data={data} setTimeOut={setTimeOut} questionNumber={questionNumber} setQuestionNumber={setQuestionNumber} />
        </div>
      </div>
      <div className="pyramid">
        <ul className="moneyList">
          {moneyPyramid.map((item)=>(
            <li className={questionNumber===item.id ?"moneyListItem active" :'moneyListItem'}>
              <span className="moneyListItemNumber">{item.id}</span> 
              <span className="moneyListItemAmount">{item.amount}</span>  
            </li>
          ))}
        </ul>
      </div>
    </div>
    </>
  )
}

export default App
