import { RecipeItemCard } from "../components/RecipeItemCard";
import { GridItem, Wrap } from "@chakra-ui/react";

export const RecipeList = ({ recipes, clickFn, ...props }) => {
  // You can play around with the console log, but ultimately remove it once you are done
  // console.log(data.hits[0].recipe.label);

  return (
    <Wrap spacing={8} justify="center" {...props}>
      {recipes.map((item) => (
        <GridItem key={item}>
          <RecipeItemCard
            clickFn={clickFn}
            recipe={item}
            key={item.recipe.label}
          />
        </GridItem>
      ))}
    </Wrap>
  );
};
