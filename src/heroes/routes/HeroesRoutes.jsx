import { Navigate, Route, Routes } from "react-router-dom"
import { DcPage, HeroePage, MarvelPage,SearchHeroe } from "../pages"
import { Navbar } from "../../ui"



export const HeroesRoutes = () => {
    return (
        <>
            <Navbar />
            <div className="container">

                <Routes>
                    <Route path="marvel" element={<MarvelPage />} />
                    <Route path="dc" element={<DcPage />} />
                    <Route path="search" element={<SearchHeroe />} />
                    <Route path="hero/:id" element={<HeroePage />} />



                    <Route path="/" element={<Navigate to='/marvel' />} />
                </Routes>
            </div>

        </>
    )
}


