import { WidgetsGrid } from '@/components'

export const metadata = {
  title: 'Admin Dashboard',
  description: 'Admin Dashboard'
}

export default function MainPage() {
  return (
    <div className='text-black p-4'>
      <h1 className='text-3xl mt-4'>Dashboard</h1>
      <span className='text-xl'>Información General</span>

      <WidgetsGrid />
      <WidgetsGrid />
    </div>
  )
}
