import { 
    Home,
    Login
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
    }
];

export default routes;