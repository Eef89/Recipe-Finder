import { Stat, StatLabel, StatNumber } from "@chakra-ui/react";

export const Nutrient = ({ amount }) => {
  const roundedValue = amount.quantity;
  return (
    <Stat>
      <StatNumber color="grey" fontSize="md">
        {Math.round(roundedValue)}
        {amount.unit}
      </StatNumber>
      <StatLabel fontSize="md">{amount.label}</StatLabel>
    </Stat>
  );
};
