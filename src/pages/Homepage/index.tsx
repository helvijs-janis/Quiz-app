/* eslint-disable @typescript-eslint/no-unused-expressions */
import { useState } from "react";
import {
  Box,
  Heading,
  Input,
  Portal,
  Select,
  createListCollection,
  Stack,
  Field,
  Flex,
} from "@chakra-ui/react";
import QuizButton from "../../components/Button";
// import Question from "../../components/Question";
import "./index.css";

const frameworks = createListCollection({
  items: [
    {
      label: "Ping pong quiz",
      value: "pingpong",
    },
    { label: "Pool quiz", value: "pool" },
    { label: "Darts quiz", value: "darts" },
  ],
});

function Homepage() {
  const [test, setTest] = useState<string[]>([]);
  const [name, setName] = useState<string>("");
  const [invalidName, setInvalidName] = useState<boolean>(false);
  const [invalidTest, setInvalidTest] = useState<boolean>(false);
  const [startTest, setStartTest] = useState<boolean>(false);

  const startGame = (): void => {
    if (name === "" || test.length === 0) {
      name === "" && setInvalidName(true);
      test.length === 0 && setInvalidTest(true);
      return;
    }

    if (!invalidName && !invalidTest) {
      console.log("invalidName", invalidName);
      console.log("invalidTest", invalidTest);

      setStartTest(true);
    }
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
                  onChange={(e) => {
                    setInvalidName(false);
                    setName(e.target.value);
                  }}
                />
                <Field.ErrorText>This field is required</Field.ErrorText>
              </Field.Root>
              <Field.Root invalid={invalidTest}>
                <Select.Root
                  collection={frameworks}
                  width="320px"
                  value={test}
                  onValueChange={(e) => {
                    setInvalidTest(false);
                    setTest(e.value);
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
                        {frameworks.items.map((framework) => (
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
    </div>
  );
}

export default Homepage;
