import { Box, Heading, Progress, SimpleGrid, Flex } from "@chakra-ui/react";
import QuizButton from "../../components/Button";
import type { QuestionCardProps } from "../../interface/index";
import { useState } from "react";

const Question: React.FC<QuestionCardProps> = ({
  question,
  callback,
  totalQuestions,
  questionNumber,
}) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  return (
    <>
      <Box bg="white" w="100%">
        <Heading as="h1" size="lg">
          <Box mb={6}>{question?.question}</Box>
        </Heading>
        <SimpleGrid columns={2} columnGap="4" rowGap="0">
          {question.options.map((option, index) => (
            <Box key={index} w="100%" mb={4}>
              <QuizButton
                colorPalette="purple"
                variant={selectedOption === option ? "solid" : "outline"}
                onClick={(e: React.FormEvent<HTMLFormElement>) => {
                  setSelectedOption(option);
                  callback(e);
                }}
                value={option}
                width="full"
              />
            </Box>
          ))}
        </SimpleGrid>
        <Box mb={6}>
          <Flex justify="center">
            <Box w="66.6667%">
              <Progress.Root
                value={questionNumber}
                max={totalQuestions}
                colorPalette="purple"
                size="xl"
              >
                <Progress.Track>
                  <Progress.Range />
                </Progress.Track>
              </Progress.Root>
            </Box>
          </Flex>
        </Box>
      </Box>
    </>
  );
};

export default Question;
