import { client } from "@/lib/axios";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Pokemon {
  [key: string]: any;
}

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query<Pokemon, string>({
      query: async (name) => {
        const pokemonResponse = await client.get(`pokemon/${name}`);
        const pokemonData = await pokemonResponse.data;

        const speciesResponse = await client.get(pokemonData.species.url);
        const speciesData = await speciesResponse.json();

        const description = speciesData.flavor_text_entries.find(
          (entry: any) => entry.language.name === "en"
        ).flavor_text;

        console.log("data", pokemonData.name);

        return {
          name: pokemonData.name,
          image: pokemonData.sprites.front_default,
          description: description,
        };
      },
    }),
    getPokemonById: builder.query<any, number>({
      query: (id) => `pokemon/${id}`,
    }),

    getPokemonOffset: builder.query<any, number>({
      query: (page) => `pokemon-species?offset=${page}&limit=20`,
      transformResponse: (response: any) => {
        return response.results.map((pokemon: any) => ({
          name: pokemon.name,
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
            pokemon.url.split("/")[6]
          }.png`,
        }));
      },
    }),
  }),
});

export const {
  useGetPokemonByNameQuery,
  useGetPokemonOffsetQuery,
  useGetPokemonByIdQuery,
} = pokemonApi;
