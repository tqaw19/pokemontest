import { Box, List, ListItem, Text } from "@chakra-ui/react";
import React from "react";

interface MovesProps {
  moves: any[];
}

export const Moves = ({ moves }: MovesProps) => {
  return (
    <Box border="1px solid #e3e3e3" rounded="md" mt="2rem" p="1rem">
      <Text fontWeight="bold">Moves</Text>
      <List>
        {moves.slice(0, 3).map((move) => (
          <ListItem key={`2341${move}`}>{move}</ListItem>
        ))}
      </List>
    </Box>
  );
};
