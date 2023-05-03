import React from 'react'
import { HeroCard } from '../components/HeroCard'
import { useForm } from '../../hooks/useForm'
import { useLocation, useNavigate } from 'react-router-dom'
import queryString from 'query-string';
import { getHeoresByName } from '../helpers';
import { key } from 'localforage';

export const SearchHeroe = () => {

    const navigate = useNavigate()

    const location = useLocation()

    const { q = '' } = queryString.parse(location.search)

    const hereos = getHeoresByName(q)

    const showSearch = (q.length ===0);
    const showError = (q.length > 0) && (hereos.length ===0);

    const { buscarHeroe, onInputChange, onResetForm } = useForm({
        buscarHeroe: q
    })

    const onSearchSubmit = (e) => {
        e.preventDefault();
        // if( buscarHeroe.trim().length <= 1 ) return;


        navigate(`?q=${buscarHeroe}`)
    }

    return (
        <>
            <h1>Buscar Heores</h1>
            <hr />
            <div className="row">
                <div className="col-5">
                    <h4>Buscando</h4>
                    <hr />
                    <form onSubmit={onSearchSubmit}>
                        <input
                            type="text"
                            placeholder='Buscar Heroe'
                            className='form-control'
                            name='buscarHeroe'
                            autoComplete='off'
                            value={buscarHeroe}
                            onChange={onInputChange}
                        />
                        <button className='btn btn-outline-primary mt-2'>
                            Buscar
                        </button>
                    </form>

                </div>

                <div className="col-7">
                    <h4>Resultado</h4>

                    {/*
                        (q === '')
                            ? <div className='alert alert-primary'> Busca un Heroe...</div>
                            : (hereos.length === 0)
                            && <div className='alert alert-danger'> No se encontro el heroe <b> {q}</b></div>
                    */}

                    <div className='alert alert-primary animate__animated animate__fadeIn'
                         style={{ display: showSearch ? '' : 'none' }}>
                        Busca un Heroe...
                    </div>
                    <div className='alert alert-danger animate__animated animate__fadeIn' 
                        style={{ display: showError ? '' : 'none' }}>
                        No se encontro el heroe <b> {q}</b>
                    </div>



                    {
                        hereos.map(hero => (
                            <HeroCard key={hero.id}  {...hero} />
                        ))
                    }


                </div>
            </div>

        </>
    )
}
