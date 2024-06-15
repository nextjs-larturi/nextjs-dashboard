import { FavoritePokemons } from '@/pokemons'

export const metadata = {
  title: 'Favorites Pokemons',
  description: 'Favorites Pokemons Page'
}

export default async function PokemonsPage() {
  return (
    <div className='flex flex-col items-center justify-center w-full h-full'>
      <span className='text-5xl mt-4 mb-8'>
        Your Favorite Pokemons <small className='text-blue-500'>Global State</small>
      </span>

      <FavoritePokemons />
    </div>
  )
}
