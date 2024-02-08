import { Box, List, ListItem, Text } from "@chakra-ui/react";
import React from "react";

interface MovesProps {
  moves: any[];
}

export const Moves = ({ moves }: MovesProps) => {
  return (
    <Box border="2px solid #cecece">
      <Text fontWeight="bold" mt="2rem">
        Moves
      </Text>
      <List>
        {moves.slice(0, 3).map((move) => (
          <ListItem>{move}</ListItem>
        ))}
      </List>
    </Box>
  );
};
