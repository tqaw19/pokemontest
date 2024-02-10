import React, { useState } from "react";
import { Box, Button, Flex, Grid, Text } from "@chakra-ui/react";
import { useGetPokemonOffsetQuery } from "@/app/services/pokemonApi";
import { PokemonCard } from "@/components/Card";

export const Home = () => {
  const [offset, setOffset] = useState(0);
  const {
    data: pokemonData,
    error,
    isLoading,
  } = useGetPokemonOffsetQuery(offset);

  const loadMorePokemons = () => {
    setOffset(offset + 20);
  };

  const showPreviousPokemons = () => {
    setOffset(Math.max(offset - 20, 0));
  };

  return (
    <Box>
      <Text sx={{ paddingBottom: "2rem" }}>Pokemon List</Text>

      <Grid
        templateColumns={[
          "repeat(1, 1fr)",
          "repeat(2, 1fr)",
          "repeat(3, 1fr)",
          "repeat(5, 1fr)",
        ]}
        gap={6}
      >
        {pokemonData?.map((pokemon: any) => (
          <PokemonCard key={pokemon.name} {...pokemon} />
        ))}
      </Grid>

      <Flex justify="center" py="2rem">
        <Button
          mr="2"
          display={offset === 0 ? "none" : "inherit"}
          onClick={showPreviousPokemons}
        >
          Show Previous
        </Button>
        <Button onClick={loadMorePokemons}>Show Next</Button>
      </Flex>
    </Box>
  );
};
