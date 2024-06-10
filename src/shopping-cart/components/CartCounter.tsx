'use client'

import { useAppDispatch, useAppSelector } from '@/store'
import { decrement, increment } from '@/store/counter/counterSlice'

interface Props {
  value?: number
}

export default function CartCounter({ value = 0 }: Props) {
  const count = useAppSelector((state) => state.counter.count)
  const dispatch = useAppDispatch()

  return (
    <>
      <span className='text-9xl'>{count}</span>

      <div className='flex'>
        <button
          onClick={() => dispatch(decrement())}
          className='flex items-center justify-center p-2 rounded-md bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2'
        >
          -1
        </button>

        <button
          onClick={() => dispatch(increment())}
          className='flex items-center justify-center p-2 rounded-md bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2'
        >
          +1
        </button>
      </div>
    </>
  )
}
