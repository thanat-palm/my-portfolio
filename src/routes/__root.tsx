import { createRootRoute, Outlet} from '@tanstack/react-router';
import { SwitchMenus } from '@/layouts/SwitchMenus';
import { ScrollToTop } from '@/layouts/ScrollToTop';
import { Toast } from '@/utils/components/Toast';

export const Route = createRootRoute({
  component: () => {
    return (
      <div className="relative">
        <Outlet />
        <SwitchMenus className="absolute top-2 right-2 rounded-full p-2 z-30 max-lg:hidden" />
        <ScrollToTop />
        <Toast />
      </div>
    );
  },
});
