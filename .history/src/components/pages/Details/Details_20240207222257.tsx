import React from "react";
import { Box, Flex, Image, Spinner, Text } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { useGetPokemonByNameQuery } from "@/app/services/pokemonApi"; // assuming this is the correct import path
import { useParams } from "react-router-dom";
import { Moves } from "./Moves";

export const Details = () => {
  const { pokemonNameParam } = useParams();
  const {
    data: pokemonInfo,
    error,
    isLoading,
  } = useGetPokemonByNameQuery(pokemonNameParam ?? "");

  if (isLoading)
    return (
      <Box display="flex" justifyContent="center">
        <Spinner />
      </Box>
    );

  if (!pokemonInfo) return <h2>Pokemon not found</h2>;

  const { name, image, description, moves } = pokemonInfo ?? {};

  return (
    <>
      <Text pb="2rem">Pokemon Details</Text>

      <Flex alignItems="start">
        <Box display="flex" flexDirection="column">
          <Text
            display="flex"
            fontSize="xl"
            fontWeight="bold"
            textTransform="uppercase"
            pb="2rem"
          >
            <ArrowBackIcon />
            {name}
          </Text>
          <Text pt="1rem">{description}</Text>

          <Moves moves={moves} />
        </Box>
        <Box>
          <Image src={image} alt={name} />
        </Box>
      </Flex>
    </>
  );
};
