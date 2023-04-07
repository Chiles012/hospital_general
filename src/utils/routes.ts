import { 
    Home,
    Login,
    Register
} from "../pages";

type route = {
    path: string;
    component: React.ComponentType;
    exact?: boolean;
};

export const routes: route[] = [
    {
        path: "/",
        component: Home,
        exact: true
    },
    {
        path: "/login",
        component: Login,
        exact: true
    },
    {
        path: '/register',
        component: Register,
        exact: true
    }
];

export default routes;