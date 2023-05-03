import { heroes } from "../data/heores"

export const getHeroeById = (id ) =>{

    return heroes.find( hero => hero.id === id );
}