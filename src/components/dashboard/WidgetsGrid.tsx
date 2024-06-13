'use client'

import { useAppSelector } from '@/store'
import { SimpleWidget } from './SimpleWidget'
import { IoCartOutline } from 'react-icons/io5'

export const WidgetsGrid = () => {
  const count = useAppSelector((state) => state.counter.count)

  return (
    <div className='flex flex-wrap p-3 items-center justify-center mt-20'>
      <SimpleWidget
        title='Contador'
        subTitle='Productos en el carrito'
        href='/dashboard/counter'
        label={count.toString()}
        icon={<IoCartOutline size={70} className='text-blue-700' />}
      />
    </div>
  )
}
