import React, { useEffect } from "react";
import { Box, Flex, Image, List, ListItem, Text } from "@chakra-ui/react";
import { useGetPokemonByNameQuery } from "@/app/services/pokemonApi"; // assuming this is the correct import path
import { useParams } from "react-router-dom";

export const Details = () => {
  const { pokemonNameParam } = useParams();
  const {
    data: pokemonInfo,
    error,
    isLoading,
  } = useGetPokemonByNameQuery(pokemonNameParam ?? "");

  if (isLoading) return <h2>Loading...</h2>; // return loading indicator while data is being fetched

  if (!pokemonInfo) return <h2>Pokemon not found</h2>; // handle case where data is not available

  const { name, image, description, moves } = pokemonInfo ?? {};

  console.log(pokemonInfo);

  return (
    <>
      <Text pb="2rem">Pokemon Details</Text>

      <Flex alignItems="start">
        <Box display="flex" flexDirection="column">
          <Text
            fontSize="xl"
            fontWeight="bold"
            textTransform="uppercase"
            pb="2rem"
          >
            {name}
          </Text>
          <Text pt="1rem">{description}</Text>

          <Text fontWeight="bold" pt="2rem">
            Moves
          </Text>
          <List>
            {moves.slice(0, 3).map((move) => (
              <ListItem>{move}</ListItem>
            ))}
          </List>
        </Box>
        <Box>
          <Image src={image} alt={name} />
        </Box>
      </Flex>
    </>
  );
};
