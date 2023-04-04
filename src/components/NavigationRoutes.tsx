import { Routes, Route } from "react-router-dom"
import routes from "../utils/routes"

const NavigationRoutes = () => {

    return (
        <Routes>
            {
                routes.map((route, index) => {
                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={<route.component />}
                        />
                    )
                })
            }
        </Routes>
    )

}

export default NavigationRoutes