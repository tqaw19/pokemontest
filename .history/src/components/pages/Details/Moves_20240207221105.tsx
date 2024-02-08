import { List, ListItem, Text } from "@chakra-ui/react";
import React from "react";

export const Moves = () => {
  return (
    <>
      <Text fontWeight="bold" pt="2rem">
        Moves
      </Text>
      <List>
        {moves.slice(0, 3).map((move) => (
          <ListItem>{move}</ListItem>
        ))}
      </List>
    </>
  );
};
