import { Box, List, ListItem, Text } from "@chakra-ui/react";
import React from "react";

interface MovesProps {
  moves: any[];
}

export const Moves = ({ moves }: MovesProps) => {
  return (
    <Box border="1px solid #d9d9d9" rounded="md" mt="2rem" p="1rem">
      <Text fontWeight="bold">Moves</Text>
      <List>
        {moves.slice(0, 3).map((move) => (
          <ListItem>{move}</ListItem>
        ))}
      </List>
    </Box>
  );
};
