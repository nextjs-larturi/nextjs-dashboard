'use client'

import Image from 'next/image'
import { SimplePokemon } from '../interfaces/simple-pokemon'
import Link from 'next/link'
import { IoHeart, IoHeartOutline } from 'react-icons/io5'
import { useAppDispatch, useAppSelector } from '@/store'
import { toggleFavorite } from '@/store/pokemons/pokemonsSlice'

interface Props {
  pokemon: SimplePokemon
}

export function PokemonCard({ pokemon }: Props) {
  const { id, name } = pokemon

  const isFavorite = useAppSelector((state) => state.pokemons[id] != undefined)
  const dispatch = useAppDispatch()

  const onToggle = () => {
    dispatch(toggleFavorite(pokemon))
  }

  return (
    <>
      <div className='mx-auto right-0 mt-2 w-60'>
        <div className='bg-white rounded overflow-hidden shadow-lg'>
          <div className='text-center p-6 bg-gray-800 border-b min-h-[100px]'>
            <Image
              key={id}
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
              width={100}
              height={100}
              className='h-24 w-24 text-white rounded-full mx-auto'
              alt={`Pokemon ${name}`}
              priority={false}
            />
            <p className='pt-2 text-lg font-semibold text-gray-50 capitalize'>{name}</p>
            <div className='mt-5'>
              <Link
                href={`/dashboard/pokemons/${name}`}
                className='border rounded-full py-2 px-4 text-xs font-semibold text-gray-100'
              >
                More info
              </Link>
            </div>
          </div>
          <div className='border-b'>
            <div
              className='px-4 pt-5 pb-5 hover:bg-gray-100 flex cursor-pointer'
              onClick={onToggle}
            >
              <div className='text-red-600'>
                {isFavorite ? <IoHeart size={25} /> : <IoHeartOutline size={25} />}
              </div>
              <div className='pl-3 mt-1'>
                <p className='text-sm font-medium text-gray-800 leading-none'>
                  {isFavorite ? 'Es Favorito' : 'Marcar como favorito'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
