import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroeById } from "../helpers"
import { useMemo } from "react"

export const HeroePage = () => {
    const { id } = useParams()

    const heroe = useMemo( () => getHeroeById(id), [id]  )  

    const navigate = useNavigate()

    const onNavigateBack = () =>{
        navigate(-1)
    }

    if (!heroe) {
        return <Navigate to='/marvel' />
    }

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img
                    src={`/heroes/${ id }.jpg` }
                    alt={heroe.superhero}
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                />
            </div>

            <div className="col-8">
                <h1> { heroe.superhero } </h1>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><b>alter ego:</b> {heroe.alter_ego}</li>
                    <li className="list-group-item"> <b>Publisher:</b> { heroe.publisher }</li>
                    <li className="list-group-item"> <b>First Appearance:</b> { heroe.first_appearance }</li>


                </ul>

                <div className="mt-3">
                    <p>{ heroe.characters }</p>
                </div>

                <button className=" btn btn-primary" onClick={ onNavigateBack }>Regresar</button>
            </div>
        </div>
    )
}
