import {
  Center,
  Heading,
  Image,
  Text,
  Flex,
  Button,
  Box,
  SimpleGrid,
  Divider,
  Wrap,
} from "@chakra-ui/react";
import { Tag } from "../components/ui/RecipeItemTag.jsx";
import { NutrientList } from "../components/NutrientList.jsx";

export const RecipePage = ({ recipe, clickFn }) => {
  return (
    <Center flexDir={"column"} bgColor="yellow.400" gap={4} minHeight="100vh">
      <Box
        bgColor="white"
        minHeight="100vh"
        borderRadius="sm"
        w={["base", "xl", "2xl", "3xl", "3xl"]}
      >
        <Box height="5em" padding={5}>
          <Flex>
            <Button onClick={() => clickFn()} variant="ghost" fontWeight="Bold">
              Back
            </Button>
          </Flex>
        </Box>
        <Image
          src={recipe.recipe.image}
          w={["base", "xl", "2xl", "3xl", "3xl"]}
          h="25em"
          borderRadius={"sm"}
          marginBottom="1em"
          objectFit="cover"
        ></Image>
        <SimpleGrid margin="2em" spacing="8em" columns={[1, 1, 2, 2, 2, 2]}>
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

            <Heading justify="center" fontSize={"2xl"}>
              {recipe.recipe.label}
            </Heading>
            <Divider margin="2"></Divider>
            <Text>Total cooking time: {recipe.recipe.totalTime}</Text>
            <Text>Servings: {recipe.recipe.yield}</Text>
            <Divider margin="2"></Divider>
            <Text fontSize="xl">Ingredients:</Text>
            <Box justify="left">
              {recipe.recipe.ingredientLines.map((ing) => (
                <Text key={ing} variant="solid" lineHeight="2em">
                  {ing}
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
            <Wrap justify="left">
              {recipe.recipe.healthLabels.map((dietLabels) => (
                <Tag key={dietLabels} variant="solid" bgColor="blue.200">
                  {dietLabels}
                </Tag>
              ))}
            </Wrap>
            <Text h="1em"></Text>
            <Text marginBottom="5px" fontSize="0.9em" color="grey">
              Cautions:
            </Text>
            <Wrap justify="left" gap={2}>
              {recipe.recipe.cautions.map((caution) => (
                <Tag key={caution} variant="solid" bgColor="red.200">
                  {caution}
                </Tag>
              ))}
            </Wrap>
            <Text h="1em"></Text>
            <Text marginBottom="5px" fontSize="0.9em" color="grey">
              Diet:
            </Text>
            <Wrap justify="left">
              {recipe.recipe.dietLabels.map((diet) => (
                <Tag key={diet} variant="solid" bgColor="green.200">
                  {diet}
                </Tag>
              ))}
            </Wrap>
            <Text h="1em"></Text>
            <Text fontSize="xl">Total Nutrients:</Text>
            <Text h="1em"></Text>
            <NutrientList
              nutrients={recipe.recipe.totalNutrients}
            ></NutrientList>
          </Box>
        </SimpleGrid>
      </Box>
    </Center>
  );
};
