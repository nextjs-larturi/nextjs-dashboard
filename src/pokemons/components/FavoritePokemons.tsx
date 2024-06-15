'use client'

import { useAppSelector } from '@/store'
import { useState } from 'react'
import { PokemonGrid } from './PokemonGrid'
import { IoHeartOutline } from 'react-icons/io5'

export const FavoritePokemons = () => {
  const favoritesPokemons = useAppSelector((state) => Object.values(state.pokemons))

  const [pokemons, setPokemons] = useState(favoritesPokemons)

  return (
    <div className='flex flex-wrap gap-10 items-center justify-center'>
      {pokemons.length > 0 ? <PokemonGrid pokemons={pokemons} /> : <NoFavorites />}
    </div>
  )
}

export const NoFavorites = () => {
  return (
    <div className='flex flex-col h=[50vh] items-start justify-center'>
      <IoHeartOutline size={100} className='text-red-500' />
      <span>No hay favoritos</span>
    </div>
  )
}
