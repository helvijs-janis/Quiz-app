import { Box, Flex, Spacer, Heading } from "@chakra-ui/react";
import QuizButton from "../../components/Button";
import type { QuestionProps } from "../../interface/index";

const Question: React.FC<QuestionProps> = ({
  questions,
  callback,
  totalQuestions,
  questionNumber,
}) => {
  return (
    <>
      <Box bg="white" w="100%">
        <Box mb={6} fontSize="md" fontWeight="bold" textTransform="uppercase">
          Your progress: {questionNumber}/{totalQuestions}
        </Box>
        <Heading as="h1" size="lg">
          <Box mb={6}>{questions}</Box>
        </Heading>

        <Flex direction="column">
          <Box w="100%" mb={4}>
            <QuizButton
              colorPalette="purple"
              variant="outline"
              onClick={callback}
              value="True"
              width="full"
            />
          </Box>
          <Spacer />
          <Box w="100%" mb={4}>
            <QuizButton
              colorPalette="purple"
              variant="outline"
              onClick={callback}
              value="False"
              width="full"
            />
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Question;
