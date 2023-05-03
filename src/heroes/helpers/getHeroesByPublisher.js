import { heroes } from "../data/heores";
export const getHeroesByPublisher = (publisher) =>{

    const validPublisher = ['DC Comics', 'Marvel Comics'];

    if(!validPublisher.includes( publisher )){
        throw new Error(`${ publisher } no es valido el publisher`)
    }

    return heroes.filter( heroes => heroes.publisher === publisher );
}