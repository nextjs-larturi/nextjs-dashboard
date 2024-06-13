import CartCounter from '@/shopping-cart/components/CartCounter'

export const metadata = {
  title: 'Shopping Cart',
  description: 'Shopping Cart Page'
}

export default function CounterPage() {
  return (
    <div className='flex flex-col items-center justify-center w-full h-full'>
      <span>Productos en el carrito</span>
      <CartCounter value={100} />
    </div>
  )
}
