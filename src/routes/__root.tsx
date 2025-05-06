import { ScrollToTop } from '@/layouts/ScrollToTop'
import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

export const Route = createRootRoute({
  component: () => (
    <div className='w-full h-full'>
      <Outlet />
      <TanStackRouterDevtools />
      <ScrollToTop/>
     </div>
  ),
})
