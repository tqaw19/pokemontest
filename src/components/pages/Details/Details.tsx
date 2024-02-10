import React from "react";
import { Box, Button, Flex, Image, Spinner, Text } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { useGetPokemonByNameQuery } from "@/app/services/pokemonApi"; // assuming this is the correct import path
import { useNavigate, useParams } from "react-router-dom";
import { Moves } from "./Moves";

export const Details = () => {
  const { pokemonNameParam } = useParams();
  const navigate = useNavigate();
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

      <Flex>
        <Box display="flex" flexDirection="column" w="50%">
          <Button
            alignSelf="flex-start"
            leftIcon={<ArrowBackIcon />}
            variant="outline"
            onClick={() => navigate("/")}
          >
            Go Home
          </Button>
          <Text pt="1rem">{description}</Text>

          <Moves moves={moves} />
        </Box>

        <Box>
          <Text
            fontWeight="bold"
            fontSize="xl"
            textTransform="uppercase"
            textAlign="center"
          >
            {name}
          </Text>
          <Image src={image} alt={name} />
        </Box>
      </Flex>
    </>
  );
};
