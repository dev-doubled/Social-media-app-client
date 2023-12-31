import Home from "~/pages/Home";
import UserProfile from "~/pages/UserProfile";
import ImageViewer from "~/components/ImageViewer";
import Page from "~/components/StatusPopup";

const publicHeaderRoutes = [
  { path: "/", component: Home },
  { path: "/profile", component: UserProfile },
];

const publicRoutes = [
  { path: "/photo", component: ImageViewer },
  { path: "/page", component: Page },
];

export { publicRoutes, publicHeaderRoutes };
