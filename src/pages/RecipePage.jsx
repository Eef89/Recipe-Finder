import {
  Center,
  Heading,
  Image,
  Text,
  Flex,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalFooter,
  ModalBody,
  Box,
  SimpleGrid,
  Divider,
  Wrap,
} from "@chakra-ui/react";
import { Tag } from "../components/ui/RecipeItemTag.jsx";

export const RecipePage = ({ recipe, clickFn }) => {
  return (
    <Center flexDir={"column"} bgColor="yellow.400" gap={4} minHeight="100vh">
      <Box
        bgColor="white"
        minHeight="100vh"
        borderRadius="sm"
        w={["sm", "sm", "3xl", "4xl", "5xl"]}
      >
        <Box height="4em"></Box>
        <Image
          src={recipe.recipe.image}
          w={["sm", "sm", "3xl", "4xl", "5xl"]}
          h="25em"
          borderRadius={"sm"}
          marginBottom="1em"
          objectFit="cover"
        ></Image>
        <SimpleGrid margin="2em" spacing="8em" columns={[1, 1, 2]}>
          {/* Start of left box */}
          <Box>
            <Flex paddingBottom="1">
              {recipe.recipe.mealType.map((mealType) => (
                <Text
                  direction="row"
                  color="grey"
                  key={mealType}
                  marginRight="1"
                >
                  {mealType}
                </Text>
              ))}
            </Flex>

            <Heading justify="center" fontSize={"xl"}>
              {recipe.recipe.label}
            </Heading>
            <Divider margin="2"></Divider>
            <Text>Total cooking time: {recipe.recipe.totalTime}</Text>
            <Text>Servings: {recipe.recipe.yield}</Text>
            <Divider margin="2"></Divider>
            <Text fontSize="xl">Ingredients:</Text>
            <Box justify="left">
              {recipe.recipe.ingredientLines.map((ing) => (
                <Text key={ing} variant="solid">
                  - {ing}
                </Text>
              ))}
            </Box>
          </Box>
          {/* Start of right box */}
          <Box>
            <Text
              marginBottom="5px"
              fontSize="0.9em"
              color="grey"
              marginTop={[-100, -100, 0]}
            >
              Healthlabels:
            </Text>
            <Wrap justify="left" gap={2}>
              {recipe.recipe.healthLabels.map((dietLabels) => (
                <Tag key={dietLabels} variant="solid" bgColor="blue.200">
                  {dietLabels}
                </Tag>
              ))}
            </Wrap>
          </Box>
        </SimpleGrid>
        <Flex mt={4}>
          <Button mr={4}>Confirm order</Button>
          <Button onClick={() => clickFn()} variant="ghost">
            Change selection
          </Button>
        </Flex>
      </Box>
    </Center>
  );
};
