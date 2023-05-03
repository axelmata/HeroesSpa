import { Navigate, Route, Routes } from "react-router-dom";
import { HeroesRoutes } from "../heroes";

import { LoginPage } from "../auth";
import { PrivateRoute } from "./PrivateRouter";
import { PublicRouter } from "./PublicRouter";




export const AppRouter = () => {


    return (
        <>


            <Routes>
                <Route path="/login" element={
                    <PublicRouter>
                        <LoginPage />
                    </PublicRouter>
                }></Route>



                <Route path="/*" element={
                    <PrivateRoute>
                        <HeroesRoutes />
                    </PrivateRoute>
                }></Route>

            </Routes>
        </>
    )
}
