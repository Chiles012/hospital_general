import { Home } from "../pages";

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
    }
];

export default routes;