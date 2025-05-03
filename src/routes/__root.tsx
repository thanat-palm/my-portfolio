import { SwitchMenus } from '@/layouts/SwitchMenus'
import { ScrollToTop } from '@/layouts/ScrollToTop'
import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

export const Route = createRootRoute({
  component: () => (
    <>
      <Outlet />
      <TanStackRouterDevtools />
      <ScrollToTop/>
      <div className="absolute top-2 right-2 lg:block hidden">
        <SwitchMenus />
      </div>
    </>
  ),
})
