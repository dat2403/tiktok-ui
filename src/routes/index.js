import { HeaderOnlyLayout } from '~/components/Layout';
import FollowingPage from '~/pages/Following';
import HomePage from '~/pages/Home';
import ProfilePage from '~/pages/Profile';
import SearchPage from '~/pages/Search';
import UploadPage from '~/pages/Upload';

export const publicRoutes = [
    {
        path: '/',
        component: HomePage,
    },
    {
        path: "/following",
        component: FollowingPage
    },
    {
        path: "/profile",
        component: ProfilePage
    },
    {
        path: "/upload",
        component: UploadPage,
        layout: HeaderOnlyLayout
    },
    {
        path: "/search",
        component: SearchPage,
        layout: null
    },
];

export const privateRoutes = [];