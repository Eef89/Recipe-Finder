import { Nutrient } from "./ui/NutrientBox";
import { Wrap } from "@chakra-ui/react";

export const NutrientList = ({ nutrients }) => {
  return (
    <Wrap spacing={6}>
      <Nutrient amount={nutrients.ENERC_KCAL}></Nutrient>
      <Nutrient amount={nutrients.CHOCDF}></Nutrient>
      <Nutrient amount={nutrients.PROCNT}></Nutrient>
      <Nutrient amount={nutrients.FAT}></Nutrient>
      <Nutrient amount={nutrients.CHOLE}></Nutrient>
      <Nutrient amount={nutrients.NA}></Nutrient>
    </Wrap>
  );
};
