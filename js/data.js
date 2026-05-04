const quizzes = [
  {
    id: 1,
    title: "Basic Numeracy",
    image: "../image/numeracy.jpg",
    questions: [
      {
        id: 1,
        question: "What is 25% of 200?",
        options: ["25", "40", "50", "75"],
        correctAnswer: "50",
      },
      {
        id: 2,
        question: "Solve: 3 × (4 + 2)",
        options: ["18", "14", "24", "20"],
        correctAnswer: "18",
      },
      {
        id: 3,
        question: "What is 7²?",
        options: ["14", "49", "21", "77"],
        correctAnswer: "49",
      },
      {
        id: 4,
        question:
          "If a train travels 60 km in 1 hour, how far does it travel in 3 hours?",
        options: ["120 km", "150 km", "180 km", "200 km"],
        correctAnswer: "180 km",
      },
      {
        id: 5,
        question: "What is the next number in the sequence: 2, 4, 8, 16, ?",
        options: ["18", "24", "30", "32"],
        correctAnswer: "32",
      },
    ],
  },

  {
    id: 2,
    title: "Basic Literacy",
    image: "../image/literacy.jpg",
    questions: [
      {
        id: 1,
        question: "Which word is a noun?",
        options: ["Run", "Beautiful", "Table", "Quickly"],
        correctAnswer: "Table",
      },
      {
        id: 2,
        question: "Choose the correct spelling.",
        options: ["Recieve", "Receive", "Receeve", "Receve"],
        correctAnswer: "Receive",
      },
      {
        id: 3,
        question: "Which sentence is correct?",
        options: [
          "She go to school.",
          "She goes to school.",
          "She going school.",
          "She gone to school.",
        ],
        correctAnswer: "She goes to school.",
      },
      {
        id: 4,
        question: "What is the opposite of 'happy'?",
        options: ["Sad", "Fast", "Tall", "Bright"],
        correctAnswer: "Sad",
      },
      {
        id: 5,
        question: "Which word is a verb?",
        options: ["Chair", "Blue", "Eat", "Soft"],
        correctAnswer: "Eat",
      },
    ],
  },

  {
    id: 3,
    title: "Health and Wellbeing",
    image: "../image/health.jpg",
    questions: [
      {
        id: 1,
        question: "How many hours of sleep do most adults need?",
        options: ["2–3", "4–5", "7–9", "12–14"],
        correctAnswer: "7–9",
      },
      {
        id: 2,
        question: "Which drink is best for hydration?",
        options: ["Water", "Energy drink", "Coffee", "Cola"],
        correctAnswer: "Water",
      },
      {
        id: 3,
        question: "Which habit supports mental wellbeing?",
        options: [
          "Regular exercise",
          "Skipping sleep",
          "Eating only sweets",
          "Avoiding people completely",
        ],
        correctAnswer: "Regular exercise",
      },
      {
        id: 4,
        question: "Which food is a fruit?",
        options: ["Bread", "Apple", "Cheese", "Rice"],
        correctAnswer: "Apple",
      },
      {
        id: 5,
        question: "What should you do before eating?",
        options: [
          "Wash your hands",
          "Run outside",
          "Brush your shoes",
          "Turn off the lights",
        ],
        correctAnswer: "Wash your hands",
      },
    ],
  },

  {
    id: 4,
    title: "Scottish History",
    image: "../image/scotland.jpg",
    questions: [
      {
        id: 1,
        question: "What is the capital city of Scotland?",
        options: ["Glasgow", "Edinburgh", "Aberdeen", "Dundee"],
        correctAnswer: "Edinburgh",
      },
      {
        id: 2,
        question: "Who was William Wallace?",
        options: [
          "A Scottish knight",
          "An English king",
          "A Roman emperor",
          "A famous scientist",
        ],
        correctAnswer: "A Scottish knight",
      },
      {
        id: 3,
        question: "Which flower is a symbol of Scotland?",
        options: ["Rose", "Thistle", "Tulip", "Daisy"],
        correctAnswer: "Thistle",
      },
      {
        id: 4,
        question: "What is Scotland’s national animal?",
        options: ["Lion", "Dragon", "Unicorn", "Eagle"],
        correctAnswer: "Unicorn",
      },
      {
        id: 5,
        question: "Which city is the largest in Scotland?",
        options: ["Edinburgh", "Glasgow", "Inverness", "Perth"],
        correctAnswer: "Glasgow",
      },
    ],
  },

  {
    id: 5,
    title: "Social Awareness",
    image: "../image/social.jpg",
    questions: [
      {
        id: 1,
        question: "What does respect mean?",
        options: [
          "Listening to others",
          "Ignoring people",
          "Laughing at people",
          "Being rude",
        ],
        correctAnswer: "Listening to others",
      },
      {
        id: 2,
        question: "What should you do if someone needs help?",
        options: [
          "Ignore them",
          "Offer help if it is safe",
          "Laugh at them",
          "Walk away always",
        ],
        correctAnswer: "Offer help if it is safe",
      },
      {
        id: 3,
        question: "What is equality?",
        options: [
          "Treating people fairly",
          "Only helping friends",
          "Judging people by appearance",
          "Ignoring differences",
        ],
        correctAnswer: "Treating people fairly",
      },
      {
        id: 4,
        question: "Which action is kind?",
        options: [
          "Sharing with others",
          "Shouting at people",
          "Taking someone’s things",
          "Spreading rumours",
        ],
        correctAnswer: "Sharing with others",
      },
      {
        id: 5,
        question: "What should you do during a disagreement?",
        options: [
          "Listen calmly",
          "Start shouting",
          "Insult the person",
          "Walk away without listening",
        ],
        correctAnswer: "Listen calmly",
      },
    ],
  },
];

export default quizzes;