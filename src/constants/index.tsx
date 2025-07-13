import { createListCollection } from "@chakra-ui/react";

export const tests = createListCollection({
  items: [
    {
      label: "Ping pong quiz",
      value: "pingpong",
      questions: [
        {
          question:
            "What was ping pong originally called before it got its current name?",
          correct_answer: "Whiff-whaff",
          options: ["Table smash", "Whiff-whaff", "Net bounce", "Paddle ball"],
        },
        {
          question:
            "In which year did table tennis become an official Olympic sport?",
          correct_answer: "1988",
          options: ["1976", "1984", "1988", "1992", "1996"],
        },
        {
          question:
            "What is the approximate top speed a ping pong ball can reach during professional play?",
          correct_answer: "Over 100 km/h",
          options: [
            "50 km/h",
            "60 km/h",
            "80 km/h",
            "90 km/h",
            "100 km/h",
            "Over 100 km/h",
          ],
        },
      ],
    },
    {
      label: "Pool quiz",
      value: "pool",
      questions: [
        {
          question:
            "What is the standard number of balls used in a game of 8-ball pool (excluding the cue ball)?",
          correct_answer: "15",
          options: ["10", "12", "15", "16"],
        },
        {
          question:
            "What is the name of the opening shot that starts a game of pool?",
          correct_answer: "Break shot",
          options: [
            "Smash",
            "First strike",
            "Break shot",
            "Cue burst",
            "Banzai",
          ],
        },
        {
          question:
            "Which material is commonly used to cover a professional pool table?",
          correct_answer: "Woolen cloth",
          options: [
            "Plastic sheet",
            "Rubber surface",
            "Woolen cloth",
            "Canvas",
            "Birch",
            "Firtree",
          ],
        },
      ],
    },
    {
      label: "Darts quiz",
      value: "darts",
      questions: [
        {
          question:
            "What is the highest possible score with a single dart throw?",
          correct_answer: "60",
          options: ["50", "60", "75", "100"],
        },
        {
          question:
            "What number must a player reach exactly to win a standard game of 501 darts?",
          correct_answer: "0",
          options: ["1", "50", "100", "0", "501"],
        },
        {
          question:
            "Which part of the dartboard scores the most points per hit?",
          correct_answer: "Triple 20",
          options: ["Bullseye", "Triple 20", "Double 19", "Outer ring"],
        },
      ],
    },
  ],
});

export const totalQuestions = 3;
