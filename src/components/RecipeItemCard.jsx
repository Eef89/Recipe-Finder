import {
  Card,
  Heading,
  Stack,
  CardBody,
  Image,
  Flex,
  Divider,
  Text,
  Center,
} from "@chakra-ui/react";
import { Tag } from "./ui/RecipeItemTag.jsx";
// import { portfolioItems } from "../utils/data";

export const RecipeItemCard = ({ recipe, clickFn }) => {
  const isVegan = recipe.recipe.healthLabels.filter(
    (item) => item === "Vegan" || item === "Vegetarian"
  );

  return (
    <Card
      variant="filled"
      maxW="sm"
      cursor="pointer"
      onClick={() => clickFn(recipe)}
      h="30em"
      _hover={{ transform: "scale(1.02)" }}
      bgColor="white"
    >
      <CardBody padding={0}>
        <Image
          objectFit="cover"
          h={64}
          w={800}
          src={recipe.recipe.image}
          alt="Green double couch with wooden legs"
          borderTopRadius="md"
        />
        <Flex gap={2} position="absolute" top={2} marginLeft={2}>
          {isVegan.map((vega) => (
            <Tag key={vega} variant="solid" bgColor="green.500">
              {vega}
            </Tag>
          ))}
        </Flex>
        <Stack mt="6" spacing="3">
          <Center>
            {recipe.recipe.mealType.map((mealType) => (
              <Text color="grey" marginRight={2} key={mealType}>
                {mealType}
              </Text>
            ))}
            <Center height="20px">
              <Divider
                orientation="vertical"
                colorScheme="blue"
                variant="solid"
              />
            </Center>
            {recipe.recipe.dishType.map((dishType) => (
              <Text color="grey" marginLeft={2} key={dishType} variant="solid">
                {dishType}
              </Text>
            ))}
          </Center>
          <Heading size="md" align="center">
            <Flex justify="center">{recipe.recipe.label}</Flex>
          </Heading>
          <Flex justify="center" gap={2}>
            {recipe.recipe.dietLabels.map((dietLabels) => (
              <Tag key={dietLabels} variant="solid" bgColor="blue.200">
                {dietLabels}
              </Tag>
            ))}
          </Flex>

          <Flex justify="center" gap={2}>
            {recipe.recipe.cautions.map((cautions) => (
              <Tag key={cautions} variant="solid" bgColor="red.400">
                {cautions}
              </Tag>
            ))}
          </Flex>
        </Stack>
      </CardBody>
    </Card>
  );
};
