import { Center, Heading } from "@chakra-ui/react";
import { data } from "../utils/data";
import { RecipeList } from "../components/RecipeList";
import { TextInput } from "../components/ui/TextInput";
import { useState } from "react";

export const RecipeListPage = ({ clickFn }) => {
  // You can play around with the console log, but ultimately remove it once you are done
  // console.log(data.hits[0].recipe.label);

  const [searchField, setSearchField] = useState("");

  const handleChange = (event) => {
    setSearchField(event.target.value);
  };

  // filter for the name/label, healthlabel and mealtype
  const matchedRecipes = data.hits.filter((match) => {
    return (
      match.recipe.label.toLowerCase().includes(searchField.toLowerCase()) ||
      match.recipe.healthLabels
        .map((item) => item.toLowerCase())
        .some((item) => item.includes(searchField.toLowerCase())) || // find and some can be used here, dont understand why...
      match.recipe.mealType
        .map((item) => item.toLowerCase())
        .some((item) => item.includes(searchField.toLowerCase()))
    );
  });

  return (
    <Center minHeight="100vh" flexDir="column" bgColor="yellow.400" gap={8}>
      <Heading padding={4} marginTop={4}>
        Recipe Finder
      </Heading>
      <TextInput
        w={["80%", "xl", "2xl"]}
        changeFn={handleChange}
        placeholder="Let's see if we have it!"
        textAlign="center"
      ></TextInput>
      <RecipeList
        clickFn={clickFn}
        padding={5}
        columns={[1, 2, 2, 3, 4]}
        recipes={matchedRecipes}
      ></RecipeList>
    </Center>
  );
};
