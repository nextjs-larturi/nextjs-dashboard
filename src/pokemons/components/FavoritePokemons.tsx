'use client'

import { useAppSelector } from '@/store'
import { PokemonGrid } from './PokemonGrid'
import { IoHeartOutline } from 'react-icons/io5'

export const FavoritePokemons = () => {
  const favoritesPokemons = useAppSelector((state) => Object.values(state.pokemons.favorites))

  return (
    <div className='flex flex-wrap gap-10 items-center justify-center'>
      {favoritesPokemons.length > 0 ? (
        <PokemonGrid pokemons={favoritesPokemons} />
      ) : (
        <NoFavorites />
      )}
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
