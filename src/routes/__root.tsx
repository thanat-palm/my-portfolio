import { ScrollToTop } from '@/layouts/ScrollToTop'
import { SwitchMenus } from '@/layouts/SwitchMenus'
import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

export const Route = createRootRoute({
  
  component: () => (
    <div className='w-full h-full'>
      <Outlet />
      <TanStackRouterDevtools />
      <SwitchMenus className='absolute top-2 right-2 rounded-full p-2 z-30 max-md:hidden'/>
      <ScrollToTop/>
     </div>
  ),
})
