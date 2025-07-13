/* eslint-disable @typescript-eslint/no-unused-expressions */
import { useState } from "react";
import {
  Box,
  Heading,
  Input,
  Portal,
  Select,
  Stack,
  Field,
  Flex,
} from "@chakra-ui/react";
import QuizButton from "../../components/Button";
import "./index.css";
import Question from "../../components/Question";
import type { AnswerObject, SingleQuestion } from "../../interface";
import { totalQuestions, tests } from "../../constants";

function Homepage() {
  const [test, setTest] = useState<string[]>([]);
  const [name, setName] = useState<string>("");
  const [invalidName, setInvalidName] = useState<boolean>(false);
  const [invalidTest, setInvalidTest] = useState<boolean>(false);
  const [startTest, setStartTest] = useState<boolean>(false);
  const [chosenAnswer, setChosenAnswer] = useState<string>("");
  const [questions, setQuestions] = useState<SingleQuestion[]>([]);
  const [userAnswer, setUserAnswer] = useState<AnswerObject[]>([]);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const startGame = (): void => {
    if (name === "" || test.length === 0) {
      name === "" && setInvalidName(true);
      test.length === 0 && setInvalidTest(true);
      return;
    }
    if (!invalidName && !invalidTest) {
      setStartTest(true);
    }
  };

  const selectAnswer = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setChosenAnswer(e.currentTarget.innerText);
  };

  const nextQuestion = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const correct = questions[questionNumber]?.correct_answer === chosenAnswer;
    if (correct) setScore((previous) => previous + 1);
    if (userAnswer.length != questionNumber) {
      if (!correct) setScore((previous) => previous - 1);
      const lastIndex = userAnswer.length - 1;
      if (lastIndex >= 0) {
        userAnswer.splice(lastIndex, 1);
        const answerObject = {
          question: questions[questionNumber]?.question,
          answer: chosenAnswer,
          correct,
          correctAnswer: questions[questionNumber]?.correct_answer,
        };
        setUserAnswer((previous) => [...previous, answerObject]);
      }
      return;
    }
    const answerObject = {
      question: questions[questionNumber]?.question,
      answer: chosenAnswer,
      correct,
      correctAnswer: questions[questionNumber]?.correct_answer,
    };
    setUserAnswer((previous) => [...previous, answerObject]);
    const nextQuestion = questionNumber + 1;
    if (totalQuestions === nextQuestion) {
      setGameOver(true);
    }
    setQuestionNumber(nextQuestion);
    setChosenAnswer("");
  };

  const replayQuiz = (): void => {
    setTest([]);
    setStartTest(false);
    setGameOver(false);
    setQuestionNumber(0);
    setScore(0);
    setUserAnswer([]);
  };

  return (
    <div className="App">
      {!startTest && (
        <div className="greeting-box">
          <Box p="6" rounded="md" bg="white" maxW="560px" shadow="md">
            <Heading as="h1" size="6xl" mb={4}>
              Test Task
            </Heading>
            <Stack gap="4">
              <Field.Root invalid={invalidName}>
                <Input
                  placeholder="Enter your name"
                  size="sm"
                  variant={"outline"}
                  value={name}
                  onChange={(e) => {
                    setInvalidName(false);
                    setName(e.target.value);
                  }}
                />
                <Field.ErrorText>This field is required</Field.ErrorText>
              </Field.Root>
              <Field.Root invalid={invalidTest}>
                <Select.Root
                  collection={tests}
                  width="320px"
                  value={test}
                  onValueChange={(e) => {
                    setInvalidTest(false);
                    setTest(e.value);
                    setQuestions(e.items[0].questions ?? []);
                  }}
                >
                  <Select.HiddenSelect />
                  <Select.Control>
                    <Select.Trigger>
                      <Select.ValueText placeholder="Choose a test" />
                    </Select.Trigger>
                    <Select.IndicatorGroup>
                      <Select.Indicator />
                    </Select.IndicatorGroup>
                  </Select.Control>
                  <Portal>
                    <Select.Positioner>
                      <Select.Content>
                        {tests.items.map((framework) => (
                          <Select.Item item={framework} key={framework.value}>
                            {framework.label}
                            <Select.ItemIndicator />
                          </Select.Item>
                        ))}
                      </Select.Content>
                    </Select.Positioner>
                  </Portal>
                </Select.Root>
                <Field.ErrorText>This field is required</Field.ErrorText>
              </Field.Root>

              <Flex justify="center">
                <QuizButton
                  colorPalette="purple"
                  variant="solid"
                  onClick={() => startGame()}
                  value="Start"
                  width="150px"
                />
              </Flex>
            </Stack>
          </Box>
        </div>
      )}

      {startTest && !gameOver && (
        <Box boxShadow="base" p="6" rounded="md" bg="white" maxW="560px">
          <Question
            question={questions[questionNumber]}
            callback={selectAnswer}
            totalQuestions={totalQuestions}
            questionNumber={questionNumber}
          />

          <Flex justify="center" mt={4}>
            <QuizButton
              disabled={chosenAnswer === ""}
              colorPalette="purple"
              variant="solid"
              onClick={nextQuestion}
              value="Next Question"
              className="next-button"
              width="33.3333%"
            />
          </Flex>
        </Box>
      )}

      {gameOver && (
        <>
          <Box boxShadow="base" p="6" rounded="md" bg="white" maxW="560px">
            <Box mb={4}>
              <Box fontWeight="bold" as="h3" fontSize="4xl" textAlign="center">
                Thank you, {name}!
              </Box>
              <Box as="h3" fontSize="xl">
                You have answered correctly on {score} out of {totalQuestions}{" "}
                questions.
              </Box>
            </Box>

            <QuizButton
              colorPalette="purple"
              variant="solid"
              onClick={replayQuiz}
              value="Play another quiz"
              width="full"
            />
          </Box>
        </>
      )}
    </div>
  );
}

export default Homepage;
