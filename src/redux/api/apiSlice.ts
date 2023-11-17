import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { PokemonAllQuery, PokemonDetailQuery, PokemonQuery } from '../types/Pokemon'

export const pokemonApiSlice = createApi({
    reducerPath: 'pokemonApi',
    baseQuery: fetchBaseQuery({ baseUrl: process.env.EXPO_PUBLIC_API_URL }),
    endpoints: (builder) => ({
        getPokemons: builder.query<PokemonAllQuery, { limit: number, page?: number }>({
            query: ({ limit = 100000, page = 0 }) => `?offset=${page * 20}&limit=${limit}`,
            transformResponse: async (rawResult: PokemonAllQuery, meta) => {
                if (rawResult.results) {
                    rawResult.results = rawResult.results.map((pokemon, i) => {
                        const url = `${process.env.EXPO_PUBLIC_IMAGE_POKEMON_URL}/${parseInt(pokemon.url.split('/')[6])}.png`
                        return ({
                            ...pokemon,
                            url,
                        })
                    })
                }
                
                // The return value for `transformResponse` must match `ResultType`
                return rawResult
            },
            merge: (currentCache, newItems) => {
                currentCache.results.push(...newItems.results);
            },
            // Refetch when the page arg changes
            forceRefetch({ currentArg, previousArg }) {
                return currentArg !== previousArg;
            },
            serializeQueryArgs: ({ endpointName }) => {
                return endpointName
            },
        }),
        getPokemonByName: builder.query<PokemonDetailQuery, string>({
            query: (name) => `/${name}`,
        }),
    }),
})

export const { useGetPokemonsQuery, useGetPokemonByNameQuery } = pokemonApiSlice