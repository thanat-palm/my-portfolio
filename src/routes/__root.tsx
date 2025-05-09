import { createRootRoute, Outlet, useRouterState } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import { SwitchMenus } from '@/layouts/SwitchMenus';
import { ScrollToTop } from '@/layouts/ScrollToTop';

export const Route = createRootRoute({
  component: () => {
    const pathname = useRouterState({ select: (s) => s.location.pathname });

    return (
      <div className="relative w-full h-full overflow-hidden">
        <Outlet />
        <TanStackRouterDevtools />
        <SwitchMenus className="absolute top-2 right-2 rounded-full p-2 z-30 max-md:hidden" />
        <ScrollToTop />
      </div>
    );
  },
});
