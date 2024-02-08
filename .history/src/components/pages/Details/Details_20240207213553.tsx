import React, { useEffect } from "react";
import { Flex, Image, Text } from "@chakra-ui/react";
import { useGetPokemonByNameQuery } from "@/app/services/pokemonApi";
import { useParams } from "react-router-dom";

export const Details = () => {
  const { pokemonNameParam } = useParams();
  const {
    data: pokemonInfo,
    error,
    isLoading,
  } = useGetPokemonByNameQuery(pokemonNameParam ?? "");

  if (!pokemonInfo) return null;
  console.log(pokemonInfo);

  const { name, image, description } = pokemonInfo ?? {};

  isLoading ? <h2>loading...</h2> : null;

  return (
    <>
      <Text pb="2rem">Pokemon Details</Text>

      <Flex flexDirection="column" alignItems="center">
        <Text fontSize="xl" fontWeight="bold" pb="2rem">
          {name}
        </Text>
        <Image src={image} alt={name} />
        <Text pt="1rem">{description}</Text>
      </Flex>
    </>
  );
};
